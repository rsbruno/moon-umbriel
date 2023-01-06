import { asyncStorageService } from '@services/asyncStorageService';
import { userService } from '@services/userService';
import jwt_decode from "jwt-decode";

import React,
{
    createContext,
    useContext,
    useState,
    ReactNode
} from 'react'

type User = {
    id: String;
    nickName: string;
    firstName: string;
    lastName: string;
    token: string;
    incompleteUser: boolean
}

type AuthContextData = {
    user: UserAuthenticated;
    signIn: (payload: IPayloadUserSignIn) => Promise<IAPIResponseGeneric<IPayloadUserSignIn>>;
    signInWithExistentingToken: (userToken: string) => Promise<boolean>
    initUserAuthAsyncStorage: () => Promise<UserAuthenticated>
}

type AuthContextProps = {
    children: ReactNode
}

type UserAuthenticated = User | null

const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthContextProps) {

    const [user, setUser] = useState<UserAuthenticated>(null);

    async function initUserAuthAsyncStorage() {
        const user = await asyncStorageService.getData(asyncStorageService.NAMES.STORAGE_AUTH)
        return user
    }

    async function storeUserInStorage(user: User) {
        await asyncStorageService.storeData(user, asyncStorageService.NAMES.STORAGE_AUTH)
    }

    async function signInWithExistentingToken(userToken: string) {
        const { firstName, id, lastName, nickName, token } = jwt_decode(userToken) as any;
        const user = { firstName, id, lastName, nickName, token, incompleteUser: true }
        setUser(() => (user))
        await storeUserInStorage(user)
        return true
    }

    async function signIn(payload: IPayloadUserSignIn) {
        const apiToken = await userService.userSignIn(payload)
        const { firstName, id, lastName, nickName, token } = jwt_decode(apiToken) as any;
        const user = { firstName, id, lastName, nickName, token, incompleteUser: true }
        setUser(() => (user))
        await storeUserInStorage(user)
        return { status: 200, error: null }
    }

    return (
        <AuthContext.Provider value={{ user, signIn, signInWithExistentingToken, initUserAuthAsyncStorage }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext);
    return context;
}

export {
    AuthProvider,
    useAuth
}
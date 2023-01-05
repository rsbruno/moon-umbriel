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
    user: User;
    signIn: (payload: IPayloadUserSignIn) => Promise<IAPIResponseGeneric<IPayloadUserSignIn>>;
    signInWithExistentingToken: (userToken: string) => Promise<boolean>
}

type AuthContextProps = {
    children: ReactNode
}

const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthContextProps) {

    const [user, setUser] = useState<User>({} as User);

    async function signInWithExistentingToken(userToken: string) {
        const { firstName, id, lastName, nickName, token } = jwt_decode(userToken) as any;
        setUser(() => ({ firstName, id, lastName, nickName, token, incompleteUser: false }))
        return true
    }

    async function signIn(payload: IPayloadUserSignIn) {
        const apiToken = await userService.userSignIn(payload)
        const { firstName, id, lastName, nickName, token } = jwt_decode(apiToken) as any;
        setUser(() => ({ firstName, id, lastName, nickName, token, incompleteUser: false }))
        return { status: 200, error: null }
    }

    return (
        <AuthContext.Provider value={{ user, signIn, signInWithExistentingToken }}>
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
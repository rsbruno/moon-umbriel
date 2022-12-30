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
}

type AuthContextData = {
    user: User;
    signIn: (payload: IPayloadUserSignIn) => Promise<IApiGenericResponseLog>;
}

type AuthContextProps = {
    children: ReactNode
}

const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthContextProps) {

    const [user, setUser] = useState<User>({} as User);

    async function signIn(payload: IPayloadUserSignIn) {
        const apiToken = await userService.userSignIn(payload)
        const { firstName, id, lastName, nickName, token } = jwt_decode(apiToken) as any;
        setUser(() => ({ firstName, id, lastName, nickName, token }))
        return { status: 200, error: null }
    }

    return (
        <AuthContext.Provider value={{ user, signIn }}>
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
import { asyncStorageService } from "./asyncStorageService"
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmlja05hbWUiOiJyc2JydW5vIiwiZmlyc3ROYW1lIjoiQnJ1bm8iLCJsYXN0TmFtZSI6IlIgU2FudG9zIiwidG9rZW4iOiJ0b2tlbiBoYXNoIiwiaW5jb21wbGV0ZVVzZXIiOmZhbHNlfQ.pzuuIPVdhFfp2SNgTIMNXvBVwldv7lsYNt37W22INl8"


const userSignIn = async (payload: IPayloadUserSignIn): Promise<string> => {
    return await new Promise(resolve => {
        return setTimeout(() => resolve(token), 3000)
    })
}

const storeSimpleUser = async (payload: IPayloadUserStore): Promise<IAPIResponseGeneric<string>> => {
    asyncStorageService.storeData(payload, asyncStorageService.NAMES.STORAGE_USER)
    return await new Promise(resolve => {
        return setTimeout(() =>
            resolve({
                status: 200,
                data: token,
                error: null
            }), 3000)
    })
}

export const userService = {
    userSignIn,
    storeSimpleUser
}
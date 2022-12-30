const userSignIn = async (payload: IPayloadUserSignIn): Promise<string> => {
    return await new Promise(resolve => {
        return setTimeout(() =>
            resolve("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmlja05hbWUiOiJyc2JydW5vIiwiZmlyc3ROYW1lIjoiQnJ1bm8iLCJsYXN0TmFtZSI6IlIgU2FudG9zIiwidG9rZW4iOiJ0b2tlbiBoYXNoIn0.Nhc7nucbpX_Ji_HR2OcxRPRsSpGI4cmaJKwlafcjRp4")
            , 3000)
    })
}

export const userService = {
    userSignIn
}
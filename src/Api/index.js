import { postWithoutToken } from "./api-interface";


export async function registerUserApi(data) {
    return await postWithoutToken("/register",data)
}
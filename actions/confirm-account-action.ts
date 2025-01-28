"use server"

import { ConfirmAccountSchema } from "@/src/schemas"
import { error } from "console"

type ActionStateType = {
    error: string[],

}
export const ConfirmAccount = async (token: string, prevstate: ActionStateType) => {

    const auth = ConfirmAccountSchema.safeParse(token)
    if(!auth.success){
        return{
            error:[]
        }
    }
    return { error: [] }
}
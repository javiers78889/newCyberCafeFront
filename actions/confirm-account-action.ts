"use server"

import { ConfirmAccountSchema, ErrorResponseSchema, SuccessSchema } from "@/src/schemas"

type ActionStateType = {
    error: string[],
    success: string

}
export const ConfirmAccount = async (token: string, prevstate: ActionStateType) => {

    const auth = ConfirmAccountSchema.safeParse(token)
    if (!auth.success) {
        return {
            error: auth.error.errors.map(n => n.message),
            success: ''
        }
    }
    //Enviar Token al backend
    const url = `${process.env.API_URL}/auth/confirm-account`


    const req = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ token: auth.data })
    })
    const json = await req.json()
    if (!req.ok) {
        const error = ErrorResponseSchema.parse(json)
        return {
            error: [error.error],
            success: ''
        }
    }
    const success = SuccessSchema.parse(json)

    return { error: [], success }
}
"use server"

import { ForgotSchema } from "@/src/schemas"
import { cookies } from "next/headers"

type ActionForgotPassword = {
    success: string,
    errors: string[]
}

export const forgotPassword = async (prevstate: ActionForgotPassword, formData: FormData) => {
    const forgotData = {
        usuario : formData.get('usuario')
    }
    const RecoverData = ForgotSchema.safeParse(forgotData)
    const usuario = RecoverData.data?.usuario
    const url = `${process.env.API_URL}/forgot-password/${usuario}`

    const req = await fetch(url, {})

    const json = req.json()

    return {
        success: '',
        errors: []
    }

}
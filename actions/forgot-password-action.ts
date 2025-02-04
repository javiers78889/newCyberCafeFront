"use server"

import { ForgotSchema } from "@/src/schemas"
import { cookies } from "next/headers"

type ActionForgotPassword = {
    success: string,
    errors: string[]
}

export const forgotPassword = async (prevstate: ActionForgotPassword, formData: FormData) => {
    const forgotData = {
        email : formData.get('email')
    }
    const token = cookies().get('jwt')
    const RecoverData = ForgotSchema.safeParse(forgotData)
    const email = RecoverData.data?.email
    const url = `${process.env.API_URL}/auth/users/${email}`

    const req = await fetch(url, {
        headers:{
            
            Authorization : `Bearer ${token}`
        }
    })

    const json = req.json()

    return {
        success: '',
        errors: []
    }

}
"use server"

import { ForgotSchema } from "@/src/schemas"

type ActionForgotPassword = {
    success: string,
    errors: string[]
}

export const forgotPassword = async (prevstate: ActionForgotPassword, formData: FormData) => {
    const forgotData = {
        email : formData.get('email')
    }

    const RecoverData = ForgotSchema.safeParse(forgotData)

    console.log(RecoverData.data)

    return {
        success: '',
        errors: []
    }

}
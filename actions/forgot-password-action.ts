"use server"

import { ErrorResponseSchema, ForgotSchema, SuccessSchema } from "@/src/schemas"
import { cookies } from "next/headers"

type ActionForgotPassword = {
    success: string,
    errors: string[]
}

export const forgotPassword = async (prevstate: ActionForgotPassword, formData: FormData) => {
    const forgotData = {
        usuario: formData.get('usuario'),
        correo: formData.get('correo'),
        password: formData.get('password'),
        password_confirm: formData.get('password_confirm')
    }
    const RecoverData = ForgotSchema.safeParse(forgotData)

    if(RecoverData.error){
        const errores= RecoverData.error.errors.map(error=>
            error.message
        )
        return{
            success:'',
            errors:errores
        }
    }
    const url = `${process.env.API_URL}/forgot-password`

    const Data = {
        usuario: RecoverData.data?.usuario,
        correo: RecoverData.data?.correo,
        password: RecoverData.data?.password,
    }

    const req = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(Data)
    })

    const json = await req.json()
    

    if(!req.ok){
        const errores = ErrorResponseSchema.parse({error:json})

        return{
            success:'',
            errors:[errores.error]
        }
    }

    const success = SuccessSchema.parse(json)

    return {
        success: success,
        errors: []
    }

}
"use server"

import { ErrorResponseSchema, LoginSchema, SuccessSchema } from "@/src/schemas"
import { cookies } from "next/headers"


type LoginType = {
    error: string[],
    success: string
}

export const Login = async (prevState: LoginType, formData: FormData) => {
    const url = `${process.env.API_URL}/login`

    const LoginData = {
        correo: formData.get('correo'),
        password: formData.get('password')
    }

    const DatosValidados = LoginSchema.safeParse(LoginData)
    console.log(DatosValidados.data)

    if (DatosValidados.error) {
        const error = DatosValidados.error.errors.map(errores => errores.message)
        
        return {
            error,
            success: prevState.success
        }
    }
    
    const req = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(DatosValidados.data)
    })

    const json = await req.json()
    console.log(json)
    if (!req.ok) {
        const errores = ErrorResponseSchema.parse(json)
        return {
            error: [errores.error],
            success: ''
        }
    }
    cookies().set({
        name: 'jwt',
        value: json,
        httpOnly: true,
        path: '/',
    })
    return {
        error: [],
        success: json
    }


}
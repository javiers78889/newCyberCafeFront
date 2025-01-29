"use server"

import { LoginSchema, SuccessSchema } from "@/src/schemas"
import { error } from "console"
import { json } from "stream/consumers"

type LoginType = {
    error: string[],
    success: string
}

export const Login = async (prevState: LoginType, formData: FormData) => {
    const url = `${process.env.API_URL}/auth/login`


    const LoginData = {
        email: formData.get('email'),
        password: formData.get('password')
    }

    const DatosValidados = LoginSchema.safeParse(LoginData)


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

    const json = req.json()
    console.log(json)
    return {
        error: [],
        success: ''
    }


}
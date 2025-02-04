"use server"


import { ErrorResponseSchema, RegisterSchema, SuccessSchema } from "@/src/schemas"

type ActionType = {
    errors: String[],
    success: string
}

export const createAccount = async (prevState: ActionType, formData: FormData) => {

    const RegisterData = {
        correo: formData.get('correo'),
        nombre: formData.get('nombre'),
        telefono: formData.get('telefono'),
        password: formData.get('password'),
        password_confirmation: formData.get('password_confirmation')
    }


    //validar 

    const register = RegisterSchema.safeParse(RegisterData)
    if (!register.success) {
        const errors = register.error.errors.map(errores => errores.message)
        return {
            errors,
            success: prevState.success
        }
    }
    // registrar usuario

    const url = `${process.env.API_URL}/users-create`
    const req = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nombre: register.data.nombre,
            correo: register.data.correo,
            telefono: register.data.telefono,
            password: register.data.password
        })
    })

    const json = await req.json()
    if (!req.ok) {
        const error = ErrorResponseSchema.parse({error:json})
        return { errors: [error.error], success: '' }
    }
    const response = SuccessSchema.parse(json)
    return { errors: [], success: response }



}
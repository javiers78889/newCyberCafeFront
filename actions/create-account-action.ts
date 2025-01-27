"use server"


import { ErrorResponseSchema, RegisterSchema, SuccessSchema } from "@/src/schemas"

type ActionType = {
    errors: String[],
    success: string
}

export const createAccount = async (prevState: ActionType, formData: FormData) => {

    const RegisterData = {
        email: formData.get('email'),
        name: formData.get('name'),
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

    const url = `${process.env.API_URL}/auth/create-account`
    const req = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: register.data.name,
            email: register.data.email,
            password: register.data.password
        })
    })

    const json = await req.json()
    console.log(json)
    if (req.status === 409) {
        const error = ErrorResponseSchema.parse(json)

        return { errors: [error.error], success: '' }
    }
    const response = SuccessSchema.parse(json)
    return { errors: [], success: response }



}
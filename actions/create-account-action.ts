"use server"


import { RegisterSchema } from "@/src/schemas"


export async function createAccount(prevState, formData: FormData) {


    console.log(formData.get('email'))

    const RegisterData = {
        email: formData.get('email'),
        name: formData.get('name'),
        password: formData.get('password'),
        password_confirmation: formData.get('password_confirmation')
    }


    //validar 

    const register = RegisterSchema.safeParse(RegisterData)

    const errors = register.error?.errors.map(errores => errores.message)

    if (errors?.length! > 0) {
        console.log('STOP')
        console.log(errors)
        return;
    } else {

        if (!register.success) {
            return;
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
        return json

    }

}
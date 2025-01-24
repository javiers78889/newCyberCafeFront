"use server"


import { RegisterSchema } from "@/src/schemas"

type ActionType = {
    errors: String[]
}
export async function createAccount(prevState: ActionType, formData: FormData) {


    console.log(formData.get('email'))

    const RegisterData = {
        email: formData.get('email'),
        name: formData.get('name'),
        password: formData.get('password'),
        password_confirmation: formData.get('password_confirmation')
    }


    //validar 

    const register = RegisterSchema.safeParse(RegisterData)

    if(register.error){
        
    }
    const errors = register.error?.errors.map(errores => errores.message)


    if (!register.success) {
        return errors;
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
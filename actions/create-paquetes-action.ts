"use server"

import { ErrorResponseSchema, PaquetesSchema, SuccessSchema } from "@/src/schemas"
import { cookies, headers } from "next/headers"

type PaquetesType = {
    success: string,
    errors: string[]
}

export const createPaquetes = async (prevstate: PaquetesType, formData: FormData) => {
    const url = `${process.env.API_URL}/paquetes`
    const token = cookies().get('jwt')

    const datos = {
        usuario: formData.get('usuario'),
        tracking: formData.get('tracking'),
        peso: formData.get('peso') !== null ? parseInt(formData.get('peso') as string) : NaN,
        plan: formData.get('plan')
    }

    //validar
    const validar = PaquetesSchema.safeParse(datos)

    if(!validar.success){
        return{
            success:'',
            errors:validar.error.errors.map(n=>
                n.message
            )
        }
    }

    //enviar al backend
    const req = await fetch(url, {
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${token?.value}`
        },
        body: JSON.stringify({
            usuario: validar.data?.usuario,
            tracking: validar.data?.tracking,
            peso: validar.data?.peso,
            plan: validar.data?.plan
        })
    }
    )
    const json = await req.json()
    console.log(json)

    if (!req.ok) {
        
        const error = ErrorResponseSchema.parse({error:json})
        return {
            errors: [error.error],
            success:''
        }
    }
    const success= SuccessSchema.parse(json)
  

    return {
        success:success,
        errors: []
    }

}
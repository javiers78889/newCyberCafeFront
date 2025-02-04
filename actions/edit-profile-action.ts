"use server"

import { editPerfilSchema, ErrorResponseSchema } from "@/src/schemas"
import { cookies } from "next/headers"

type TEdit = {
    success: string,
    errors: string[]
}


export const editProfile = async (prevState:TEdit,formData: FormData) => {
    const url = `${process.env.API_URL}/users`
    const token = cookies().get('jwt')

    const edit={
        nombre:formData.get('nombre'),
        correo:formData.get('correo'),
        correo_confirm:formData.get('correo_confirm')
    }
    const validar = editPerfilSchema.safeParse(edit)

    if(!validar.success){
        const errores= validar.error.errors.map(n=> n.message)
        return{
            success:'',
            errors:errores
        }
    }
    const req= await fetch(url,{
        method:'PUT',
        headers:{
            'Content-Type':'application/json',
            'authorization': `Bearer ${token?.value}`
        },
        body: JSON.stringify({
            nombre: validar.data.nombre,
            correo: validar.data.correo
        })
    })

    const json = await req.json()

    if(!req.ok){
        const errores = ErrorResponseSchema.parse(json)
        return{
            success:'',
            errors:[errores.error]
        }
    }
    return {
        success: json,
        errors: []
    }
}
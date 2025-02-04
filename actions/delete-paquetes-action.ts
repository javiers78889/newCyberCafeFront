"use server"

import { EntregarPaqueteSchema, ErrorResponseSchema, SuccessSchema } from "@/src/schemas"
import { cookies } from "next/headers"

type PaquetesType = {
    success: string,
    errors: string[]
}

export const DeletePaquete = async (prevstate: PaquetesType, id: number) => {
     const url = `${process.env.API_URL}/paquetes/${id}`
       const token = cookies().get('jwt')
       const validarID = EntregarPaqueteSchema.safeParse(id)
       if (!validarID.success) {
           return {
               success: '',
               errors: []
           }
       }
   
       const req = await fetch(url, {
           method: 'DELETE',
           headers: {
               'authorization': `Bearer ${token?.value}`
           }
       })
       const json = await req.json()
       if (!req.ok) {
           const errores = ErrorResponseSchema.parse(json)
   
           return {
               success: '',
               errors: [errores.error]
           }
       }
   
       const Success = SuccessSchema.parse(json)
   
   
       return {
           success: Success,
           errors: []
       }
}
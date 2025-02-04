"use server"

import { ErrorResponseSchema, getUsers, getUserSchema } from "@/src/schemas"
import { cookies } from "next/headers"

type ActionType = {
    errors: string[],
    success: getUsers
}
export const getPaquetesAdmin = async (): Promise<ActionType>  => {
    const jwt = cookies().get('jwt')
    const url = `${process.env.API_URL}/paquetes/all`

    const req = await fetch(url, {
        headers: {
            'authorization': `Bearer ${jwt?.value}`
        }
    })

    const json = await req.json()   
       if (!req.ok) {
           const error = ErrorResponseSchema.parse(json)
   
           return { errors: [error.error], success: [] }
       }
       const validar = getUserSchema.parse(json.data)
       const DataSuccess = validar.map(n => ({
           id: n.id,
           pago: n.pago,
           peso: n.peso,
           precio: n.precio,
           status: n.status,
           tarifas: n.tarifas,
           tracking: n.tracking,
           usuario: n.usuario
       }))
   
       return {
           errors: [],
           success: DataSuccess
       }




}
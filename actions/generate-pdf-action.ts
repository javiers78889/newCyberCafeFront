"use server"

import { ErrorResponseSchema, getUserSchema } from "@/src/schemas"
import { Params } from "next/dist/shared/lib/router/utils/route-matcher"
import { cookies } from "next/headers"



export const ConsultarFactura = async (id:Params) => {
  
console.log('AQUI')
console.log(id)

    const url = `${process.env.API_URL}/paquetes/${id.id}`
    const jwt = cookies().get('jwt')
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
    console.log(DataSuccess)

    return {
        success: DataSuccess,
        errors: []
    }
}
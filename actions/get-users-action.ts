"use server"
import { Usuarios, UsuariosSchema } from "@/src/schemas"
import { cookies } from "next/headers"

type TUser = {
    errors: string[],
    success: Usuarios
}

export const getUsers = async (): Promise<TUser> => {
    const url = `${process.env.API_URL}/users/all`
    const jwt = cookies().get('jwt')

    const req = await fetch(url, {
        headers: {
            'authorization': `Bearer ${jwt?.value}`
        }
    })

    const json = await req.json()
  
    if (!req.ok) {
        return {
            errors: json,
            success: []
        }
    }
   const validate = UsuariosSchema.parse(json)
   const DataSuccess = validate.map(n => ({
    id: n.id,
    usuario: n.usuario,
    contraseña: n.contraseña,
    nombre: n.nombre,
    telefono: n.telefono,
    correo: n.correo,
   
}))

    return {
        errors: [],
        success: DataSuccess
    }

}
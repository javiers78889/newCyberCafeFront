"use server"
import { PaquetesSchema, ErrorResponseSchema, SuccessSchema } from "@/src/schemas"
import { cookies } from "next/headers"

type PaquetesType = {
    success: string,
    errors: string[]
}

export const createPaquetes = async (prevstate: PaquetesType, formData: FormData) => {
    const url = `${process.env.API_URL}/paquetes`
    const token = cookies().get('jwt')

    const user = formData.get('usuario')
    if (!user) return { success: '', errors: ['Usuario no proporcionado'] }

    const data = JSON.parse(user as string)
    const { usuario, telefono } = data

    const datos = {
        usuario,
        tracking: formData.get('tracking'),
        peso: formData.get('peso') ? parseInt(formData.get('peso') as string) : NaN,
        plan: formData.get('plan'),
    }

    // Validación
    const validar = PaquetesSchema.safeParse(datos)
    if (!validar.success) {
        return {
            success: '',
            errors: validar.error.errors.map(n => n.message)
        }
    }

    // Enviar al backend
    const req = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${token?.value}`
        },
        body: JSON.stringify(validar.data)
    })

    const json = await req.json()

    if (!req.ok) {
        const error = ErrorResponseSchema.parse({ error: json })
        return { errors: [error.error], success: '' }
    }

    const success = SuccessSchema.parse(json)

    // Generar enlace de WhatsApp
    const tarifa = datos.plan === "aereo" ? 3.25 : 11.75;
    const precio = (tarifa * datos.peso).toFixed(2);

    const mensaje = `
Hola ${datos.usuario}, somos AshBranding&Imports.
Has recibido un nuevo paquete.
Tracking: ${datos.tracking}
Peso: ${datos.peso} kg
Costo: $${precio}
`;

    const enlaceWhatsApp = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje.trim())}`;

    console.log(enlaceWhatsApp);


    return {
        success: enlaceWhatsApp, // se devuelve el enlace para abrir en el cliente
        errors: []
    }
}

"use server"
import { RastreoSchema } from "@/src/schemas"
import { redirect } from "next/navigation"
import { parse } from "path"


type TTracking = {
    success: string,
    errors: string[]
}
export const rastreoPaquetes = (prevState: TTracking, formData: FormData) => {
    const trackeo = formData.get('tracking')

    const trackingNumber = RastreoSchema.safeParse(trackeo)
    if (!trackingNumber.success) {
        const errores = trackingNumber.error.errors.map(n => n.message)

        console.log(errores)

        return {
            success: '',
            errors: errores
        }
    }
    const url = `https://clientes.japslogistics.com/ConsultaTracking.aspx?cid=1&idGuia=${trackingNumber.data}`
    redirect(url)
}

"use server"
import { redirect } from "next/navigation"


export const rastreoPaquetes = (formData: FormData) => {
    const trackingNumber = formData.get('tracking')

    const url = `https://clientes.japslogistics.com/ConsultaTracking.aspx?cid=1&idGuia=${trackingNumber}`

    redirect(url)
}
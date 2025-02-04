
import Tabla from '@/components/admin/tablas/Tabla'
import { verifySession } from '@/src/auth/dal';
import React from 'react'

export default async function page() {
    await verifySession()
    return (
        <>
            <h1 className="font-black text-4xl my-5 text-center ">Mis <span className=' text-orange-600'>Paquetes</span></h1>
            <Tabla />
        </>
    )
}

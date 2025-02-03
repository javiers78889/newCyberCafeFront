import EditFormPerfil from '@/components/admin/perfil/EditFormPerfil'
import { verifySession } from '@/src/auth/dal'
import React from 'react'

export default async function page() {
    const { user } = await verifySession()
    return (
        <>
        <h1 className='text-center text-4xl font-black text-amber-500'>Edita <span className='text-white'>Tus</span> <span className='text-black'>Datos</span></h1>
            <EditFormPerfil user={user}/>
        </>
    )
}

import TUser from '@/components/admin/tablas/TUser'
import { AdminPrivilege } from '@/src/auth/dalAdmin'
import React, { useEffect } from 'react'

export default async function page() {
    const { response } = await AdminPrivilege()



    return (
        <>
            <h1 className="font-black text-4xl  my-5 text-center ">Paquetes <span className='text-amber-500'>Creados</span></h1>
            <TUser />

        </>
    )
}

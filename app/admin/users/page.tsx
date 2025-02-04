import UserTable from '@/components/admin/tablas/UserTable'
import { AdminPrivilege } from '@/src/auth/dalAdmin'
import React from 'react'

export default async function pageUsers() {
     await AdminPrivilege()
    return (
        <>
            <h1 className="font-black text-4xl my-5 text-center ">Mis <span className=' text-blue-600'>Usuarios</span></h1>
            <UserTable />
        </>
    )
}

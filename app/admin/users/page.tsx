import Tabla from '@/components/admin/tablas/Tabla'
import UserTable from '@/components/admin/tablas/UserTable'
import React from 'react'

export default function pageUsers() {
    return (
        <>
            <h1 className="font-black text-4xl text-blue-600 my-5 text-center ">Mis Usuarios</h1>
            <UserTable />
        </>
    )
}

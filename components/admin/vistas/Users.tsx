import React, { use } from 'react'
import AdminDirection from '../AdminDirection'
import Link from 'next/link'
type TUser = {
    id: number;
    nombre: string;

}
export default function Users({ user }: { user: TUser }) {
    console.log(user )
    return (
        <>
            <div className='flex flex-col-reverse md:flex-row md:justify-between items-center shadow-md p-5'>
                <div className='w-full md:w-auto'>
                    <h1 className="font-black text-4xl text-red-600 my-5">Mis Paquetes</h1>
                    <p className="text-xl font-bold">Observa y Verifica tus {''}
                        <span className="text-amber-500">Paquetes</span>
                    </p>
                </div>
                <Link
                    href={`/admin/paquetes`}
                    className='bg-amber-500 p-2 rounded-lg text-white font-bold w-full md:w-auto text-center'
                >
                    Ver mis Paquetes
                </Link>

            </div>
            <div className='flex flex-col-reverse md:flex-row  lg: justify-center items-center'>
                <AdminDirection user={user} />

            </div>
        </>
    )
}

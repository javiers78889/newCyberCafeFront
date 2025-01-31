import React from 'react'
import Tabla from '../tablas/Tabla'
import Logo from '@/components/ui/Logo'
import Link from 'next/link'

export default function Admin() {
    return (
        <>
            <div className='w-full flex sm:flex-col md:flex-col lg:flex-row   justify-center gap-5 md:w-auto text-center'>
                <Link className='lg:border-r-2  px-5 ' href={'/admin/paquetes'}>
                    <h1 className="font-black text-4xl text-red-600 my-5">Mis Paquetes</h1>
                    <p className="text-xl font-bold">Observa y Verifica tus {''}
                        <span className="text-amber-500">Paquetes</span>
                    </p>
                </Link>
                <Link href={'/admin/users'} >
                    <h1 className="font-black text-4xl text-blue-600 my-5 ">Mis Usuarios</h1>
                    <p className="text-xl font-bold">Observa y Verifica tus {''}
                        <span className="text-amber-500">Usuarios</span>
                    </p>
                </Link>
            </div>
            <div className='flex flex-col-reverse md:flex-row justify-center items-center shadow-md p-5 w-full'>
                <Logo />
            </div>


        </>



    )
}

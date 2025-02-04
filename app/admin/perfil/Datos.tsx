"use client"
import Logo from '@/components/ui/Logo'
import { User } from '@/src/schemas'
import Link from 'next/link'
import React from 'react'



export default function Datos({ user }: { user: User }) {


    return (
        <>
            <div className='flex flex-col items-center justify-center'>
                <h1 className='text-4xl font-black text-center '>Tus <span className='text-white'>Datos</span></h1>
                <Logo />
                <div className='flex flex-col items-start justify-center text-justify gap-2 py-5 my-2'>
                    <h1 className='text-2xl font-black text-gray-950'>Nombre:  <span className='font-bold text-black text-xl'>{user.nombre}</span></h1>
                    <h1 className='text-2xl font-black text-gray-950'>Correo:  <span className='font-bold text-black text-xl'>{user.correo ? (user.correo) : (<span className='text-red-500'>No hay Correo Registrado</span>)}</span></h1>
                </div>{user.correo?(''):(<span className='py-5 text-yellow-300 text-xl text-center'>**Registre un correo para recibir notificacion de paquetes**</span>)}
                <Link href={'/admin/perfil/edit'} className="bg-amber-500 p-5 rounded-lg w-full text-xl font-bold text-center hover:bg-yellow-600">Editar Perfil</Link>
            </div>
        </>
    )
}

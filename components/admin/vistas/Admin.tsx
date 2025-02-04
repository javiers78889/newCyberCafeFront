import React from 'react'
import Logo from '@/components/ui/Logo'
import Link from 'next/link'
import RegisterPaquetes from '@/components/paquetes/RegisterPaquetes'

export default function Admin() {
    return (
        <>
            <div className='w-full flex md:w-auto flex-col text-center justify-center'>
                <div className='w-full flex md:w-auto text-center sm:flex-col md:flex-col lg:flex-row  justify-center gap-5 '>
                    <Link className='lg:border-r-2 border-black rounded-lg  px-5 py-2 bg-amber-400' href={'/admin/admin-paquetes'}>
                        <h1 className="font-black text-4xl  my-5">Mis <span className='text-red-600'>Paquetes</span></h1>
                        <p className="text-xl font-bold">Observa y Verifica tus {''}
                            <span className="text-red-600">Paquetes</span>
                        </p>
                    </Link>
                    <Link href={'/admin/users'} className='px-5 py-2 bg-blue-600 rounded-lg'  >
                        <h1 className="font-black text-4xl text-wh my-5 ">Mis <span className='text-white'>Usuarios</span></h1>
                        <p className="text-xl font-bold">Observa y Verifica tus {''}
                            <span className="text-white">Usuarios</span>
                        </p>
                    </Link>
                </div>

                <div className='w-full my-5 bg-amber-500 p-4 rounded-lg shadow-xl text-start'>
                <h1 className="font-black text-4xl  my-5 text-white text-st">Registra un <span className='text-red-600'>Paquete</span></h1>
                    <RegisterPaquetes/>
                </div>
            </div>
            <div className='flex flex-col-reverse md:flex-row justify-center items-center  p-5 w-full '>
                <a href={'https://wa.me/+50762144443'} className='w-52  bg-red-600 shadow-md  rounded-xl hover:bg-green-400'>
                    <Logo />
                    <p className='text-center font-bold'>Soporte Tecnico</p>
                </a>
            </div>


        </>



    )
}

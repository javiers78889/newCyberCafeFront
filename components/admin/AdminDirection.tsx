import Link from 'next/link'
import React from 'react'
type TUser = {
    id: number;
    nombre: string;
    correo: string;
}
export default function AdminDirection({ user }: { user: TUser }) {
    return (

        <div className='flex flex-col-reverse md:flex-row md:justify-between items-center'>
            <div className='w-full md:w-auto'>
                <h1 className="font-black text-4xl text-red-600 my-5">Mis Direcciones</h1>
                <div className='flex sm:flex-col lg:flex-row items-center gap-5 text-center justify-center'>
                    <div className='shadow-lg w-auto'>
                        <h2>Dirección Aérea</h2>
                    </div>
                    <div className='shadow-lg w-auto'>
                        <h2>Dirección Marítima</h2>
                    </div>
                </div>

            </div>


        </div>


    )
}

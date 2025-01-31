import Link from 'next/link'
import React from 'react'
type TUser = {
    id: number;
    nombre: string;
    
}
export default function AdminDirection({ user }: { user: TUser }) {
    return (

        <div className='flex flex-col-reverse md:flex-row md:justify-between items-center'>
            <div className='w-full md:w-auto'>
                <h1 className="font-black text-4xl text-red-600 my-5 text-center">Mis Direcciones</h1>
                <div className='flex sm:flex-col md: flex-col  lg:flex-row  items-center gap-12 text-center justify-center'>
                    <div className='shadow-lg w-auto text-justify  bg-amber-500 p-4  text-black rounded-lg '>
                        <h2 className='font-black text-white text-center my-2 text-xl '>Dirección Aérea</h2>
                        <div className='font-bold'>
                            <p>Nombre: Evan3-{user.nombre}</p>
                            <p>Direccion #1: 5401 NW 72ND AVE,Doral FL 33166</p>
                            <p>Ciudad: Doral,</p>
                            <p>Estado: Florida</p>
                            <p>Codigo postal: 33166</p>
                            <p>Pais: USA</p>
                            <p>Tel: 305-3645238</p>
                        </div>
                    </div>
                    <div className='shadow-lg w-auto text-justify  bg-amber-500 p-4  text-black rounded-lg '>
                        <h2 className='font-black text-blue-500 text-center my-2 text-xl '>Dirección Maritima</h2>
                        <div className='font-bold'>
                            <p>Nombre: EVAN3 OCEAN-{user.nombre}</p>
                            <p>Dirección: 5401 NW 72ND AVE,Doral FL 33166</p>
                            <p>Ciudad: Doral</p>
                            <p>Estado: Florida</p>
                            <p>País: USA</p>
                            <p>Código postal: 33166</p>
                            <p>Teléfono: 305-3645238</p>
                        </div>
                    </div>
                </div>

            </div>


        </div>


    )
}

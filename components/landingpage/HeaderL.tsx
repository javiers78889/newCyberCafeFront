"use client"
import Link from 'next/link'
import React from 'react'
import Logo from '../ui/Logo'
import MotionFramer from '../ui/MotionFramer'


const UrlData = [
    { name: 'Inicio', url: '#features' },
    { name: 'Rastrear Paquete', url: '#testimonials' },
    { name: 'Tiendas Recomendadas', url: '#pricing' },
    { name: 'Nuestro Servicios', url: '#faq' },
]


export default function HeaderL() {
    return (
        <header className="sticky bg-red-500 flex items-center justify-center top-0 z-50 w-full  ">

            <div className="container flex h-32 items-center justify-between ">
                <div className="flex items-center gap-2 font-bold">
                    <MotionFramer>
                        <Logo size={90} />
                    </MotionFramer>
                </div>

                <nav className="hidden md:flex gap-6 font-bold text-xl uppercase text-white">

                    {UrlData.map((urls) => (
                        <MotionFramer key={urls.name} ease='spring'>
                            <Link href={urls.url} className="text-sm font-medium transition-colors hover:text-primary">
                                {urls.name}
                            </Link>
                        </MotionFramer>
                    ))}

                </nav>
                <div className="flex items-center gap-4">
                    <MotionFramer>
                        <Link href="/auth/login" className="text-sm  transition-colors hover:text-primary bg-blue-500 hover:bg-blue-600 uppercase rounded-lg px-4 py-2 text-white font-bold">
                            CyberCafeApp
                        </Link>
                    </MotionFramer>
                </div>

            </div>
        </header>
    )
}

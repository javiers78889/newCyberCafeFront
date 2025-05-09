import Link from 'next/link'
import React from 'react'
import Logo from '../ui/Logo'

export default function FooterL() {
    return (
        <footer className="w-full bg-red-500 flex items-center justify-center border-t py-6 md:py-12">
            <div className="container flex flex-col items-center justify-center gap-4 px-4 md:px-6 md:flex-row md:justify-between">
                <div className="flex items-center gap-2 font-bold">
                    <Logo size={100}/>
                </div>
                <nav className="flex gap-4 sm:gap-6 font-bold text-lg text-white ">
                    <Link href="#" className="text-sm font-bold hover:underline underline-offset-4">
                        Términos & Condiciones
                    </Link>
                    <Link href="#" className="text-sm font-bold hover:underline underline-offset-4">
                        Privacidad
                    </Link>
                    <Link href="#" className="text-sm font-bold hover:underline underline-offset-4">
                        Cookies
                    </Link>
                </nav>
                <div className="text-center text-sm text-white md:text-left">
                    &copy; {new Date().getFullYear()} CyberCaféChame . Todos los Derechos Reservados.
                </div>
            </div>
        </footer>
    )
}

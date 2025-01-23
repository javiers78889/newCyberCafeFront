
import RegisterForm from "@/components/auth/RegisterForm"
import type { Metadata } from 'next'
import Link from "next/link"

export const metadata: Metadata = {
    title: 'CashTrackr - Crear una cuenta',
    description: 'CashTrackr - Crear una cuenta'
}

export default function page() {


    return (
        <>
            <h1 className="font-black text-6xl text-purple-950">Crear una cuenta</h1>
            <p className="text-3xl font-bold">y controla tus <span className="text-amber-500">finanzas</span></p>
            <RegisterForm />
            <nav className="mt-10 flex flex-col space-y-4">

                <Link href='/auth/login' className="text-center text-gra">¿Ya tienes cuenta?. Inicia sesión.</Link>
            </nav>
        </>
    )
}


import LoginForm from "@/components/auth/LoginForm"
import type { Metadata } from 'next'
import Link from "next/link"

export const metadata: Metadata = {
    title: 'CyberCafe - Iniciar Sesión',
    description: 'CyberCafe - Iniciar Sesión'
}

export default function page() {


    return (
        <>
            <h1 className="font-black text-6xl text-red-500">Inicia Sesión</h1>
            <p className="text-3xl font-bold">y controla tus <span className="text-amber-500">Compras Por Internet</span></p>
            <LoginForm />
            <nav className="mt-10 flex flex-col space-y-4">

                <Link href='/auth/register' className="text-center text-gra">¿No tienes cuenta?. Registrate</Link>
                <Link href='/auth/forgot-password' className="text-center text-gra">¿Olvidaste tu contraseña?</Link>


            </nav>
        </>
    )
}

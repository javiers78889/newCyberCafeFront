
import LoginForm from "@/components/auth/LoginForm"
import RegisterForm from "@/components/auth/RegisterForm"
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'CashTrackr - Iniciar Sesión',
    description: 'CashTrackr - Iniciar Sesión'
}

export default function page() {


    return (
        <>
            <h1 className="font-black text-6xl text-purple-950">Inicia Sesión</h1>
            <p className="text-3xl font-bold">y controla tus <span className="text-amber-500">finanzas</span></p>
            <LoginForm />
        </>
    )
}

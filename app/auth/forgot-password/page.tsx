
import ForgotPasswordForm from "@/components/auth/ForgotPasswordForm"
import RegisterForm from "@/components/auth/RegisterForm"
import type { Metadata } from 'next'
import Link from "next/link"

export const metadata: Metadata = {
    title: 'CashTrackr - Olvidé mi Password',
    description: 'CashTrackr - Olvidé mi Password'
}

export default function ForgotPasswordPage() {


    return (
        <>
            <h1 className="font-black text-6xl text-red-600">¿Olvisate Tu Contraseña?</h1>
            <p className="text-3xl font-bold">aquí puedes <span className="text-amber-500">Restablecerla</span></p>
            <ForgotPasswordForm />
            <nav className="mt-10 flex flex-col space-y-4">

                <Link href='/auth/login' className="text-center text-gra">Volver</Link>
                


            </nav>
        </>
    )
}

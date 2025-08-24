
import LoginForm from "@/components/auth/LoginForm"
import type { Metadata } from 'next'
import Link from "next/link"

export const metadata: Metadata = {
  title: "AshBranding&Import - INICIAR SESION",
  description: "INICIAR SERSION",
  icons: {
    icon: [
      { url: '/fete.png', sizes: '32x32', type: 'image/png' },
      { url: '/fete.png', sizes: '16x16', type: 'image/png' }
    ],
    apple: '/fete.png'
  }

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

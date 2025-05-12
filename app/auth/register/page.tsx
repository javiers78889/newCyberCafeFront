
import RegisterForm from "@/components/auth/RegisterForm"
import Link from "next/link"



export default function page() {


    return (
        <>
            <h1 className="font-black text-6xl text-red-600">Crear una cuenta</h1>
            <p className="text-3xl font-bold">y controla tus <span className="text-amber-500">Compras Por Internet</span></p>
            <RegisterForm />
            <nav className="mt-10 flex flex-col space-y-4">

                <Link href='/auth/login' className="text-center text-gra">¿Ya tienes cuenta?. Inicia sesión.</Link>
            </nav>
        </>
    )
}

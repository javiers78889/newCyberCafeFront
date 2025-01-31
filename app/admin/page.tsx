import AdminDirection from "@/components/admin/AdminDirection"
import { verifySession } from "@/src/auth/dal"
import { Metadata } from "next"
import Link from "next/link"


export const metadata: Metadata = {
    title: 'CashTrackr - Panel Admin',
    description: 'CashTrackr - Panel Admin'
}

export default async function pageAdmin() {

    const { user } = await verifySession()

    return (
        <div className="flex flex-col gap-10 ">
            <div className='flex flex-col-reverse md:flex-row md:justify-between items-center shadow-md p-5'>
                <div className='w-full md:w-auto'>
                    <h1 className="font-black text-4xl text-red-600 my-5">Mis Paquetes</h1>
                    <p className="text-xl font-bold">Observa y Verifica tus {''}
                        <span className="text-amber-500">Paquetes</span>
                    </p>
                </div>

                {user.id === 1 ? (
                    <Link
                        href={'/admin/budget/new'}
                        className='bg-amber-500 p-2 rounded-lg text-white font-bold w-full md:w-auto text-center'
                    >
                        Registrar Paquete
                    </Link>
                ) : (

                    <Link
                        href={'/admin/budget/new'}
                        className='bg-amber-500 p-2 rounded-lg text-white font-bold w-full md:w-auto text-center'
                    >
                        Ver mis Paquetes
                    </Link>
                )}
            </div>
            <div className='flex flex-col-reverse md:flex-row md:justify-between items-center'>
                <AdminDirection user ={user} />

            </div>
        </div>
    )
}

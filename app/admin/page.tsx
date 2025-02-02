import AdminDirection from "@/components/admin/AdminDirection"
import NavBar from "@/components/admin/tablas/Tabla"
import Admin from "@/components/admin/vistas/Admin"
import Users from "@/components/admin/vistas/Users"
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



            {user.id === 1 ? (
                <Admin />
            ) : (
                <Users user={user} />

            )}

        </div>

        )}

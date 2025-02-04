import Admin from "@/components/admin/vistas/Admin"
import Users from "@/components/admin/vistas/Users"
import { verifySession } from "@/src/auth/dal"





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

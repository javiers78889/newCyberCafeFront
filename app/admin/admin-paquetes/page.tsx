import TUser from '@/components/admin/tablas/TUser'
import { AdminPrivilege } from '@/src/auth/dalAdmin'


export default async function page() {
    await AdminPrivilege()

    return (
        <>
            <h1 className="font-black text-4xl text-black  my-5 text-center ">Paquetes <span className='text-amber-500'>Creados</span></h1>
            <TUser />

        </>
    )
}

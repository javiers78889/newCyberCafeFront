import AdminDirection from '../AdminDirection'
import Link from 'next/link'
import Logo from '@/components/ui/Logo';
type TUser = {
    id: number,
    nombre: string,
    correo?:string|null

}
export default function Users({ user }: { user: TUser }) {

    return (
        <>

            {user.correo?(''):(<Link href={'/admin/perfil/edit'} className='text-xl text-red-600 font-bold hover:underline text-wrap'>**¡Por favor agregue un correo para recibir su factura al correo aquí!**</Link>)}
            <div className='flex flex-col-reverse md:flex-row md:justify-between items-center shadow-md p-5 bg-white'>
                <div className='w-full md:w-auto '>
                    <h1 className="font-black text-4xl  my-5">Mis <span className='text-red-600'>Paquetes</span></h1>
                    <p className="text-xl font-bold">Observa y Verifica tus {''}
                        <span className="text-amber-500">Paquetes</span>
                    </p>
                </div>
                <Link
                    href={`/admin/paquetes`}
                    className='bg-amber-500 p-2 rounded-lg text-white font-bold w-full md:w-auto text-center'
                >
                    Ver mis Paquetes
                </Link>

            </div>
            <div className='flex flex-col-reverse md:flex-row  lg: justify-center items-center'>
                <AdminDirection user={user} />

            </div>

            <div className='flex flex-col-reverse md:flex-row justify-center items-center  p-5 w-full '>
                <a href={'https://wa.me/+50765474870'} className='w-52  bg-red-600 shadow-md  rounded-xl hover:bg-green-400'>
                    <Logo />
                    <p className='text-center font-bold'>Chat de whatsapp</p>
                </a>
            </div>
        </>
    )
}

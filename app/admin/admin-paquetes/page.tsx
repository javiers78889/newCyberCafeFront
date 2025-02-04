import TUser from '@/components/admin/tablas/TUser'


export default async function page() {

    return (
        <>
            <h1 className="font-black text-4xl  my-5 text-center ">Paquetes <span className='text-amber-500'>Creados</span></h1>
            <TUser />

        </>
    )
}

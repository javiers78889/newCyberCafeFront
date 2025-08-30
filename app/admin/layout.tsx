import AdminMenu from "@/components/admin/AdminMenu";
import Logo from "@/components/ui/Logo";
import ToasterNotification from "@/components/ui/ToasterNotification";
import { verifySession } from "@/src/auth/dal";
import { Metadata } from "next";
import Link from "next/link";
export const metadata:Metadata = {
  title: "AshBranding&Import",
  description: "CRM",
  icons: {
    icon: [
      { url: '/fete.png', sizes: '32x32', type: 'image/png' },
      { url: '/fete.png', sizes: '16x16', type: 'image/png' }
    ],
    apple: '/fete.png'
  }

}
export default async function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user } = await verifySession()
  return (
    <>
    
      <header className='bg-red-600 py-5'>
        <div className='max-w-5xl mx-auto flex flex-col lg:flex-row justify-between items-center'>
          <div className='w-96'>
            <Link href={'/admin'}>
              <Logo />
            </Link>
          </div>

          <AdminMenu user={user} />
        </div>
      </header>
      
      <section className='min-h-screen max-w-5xl mx-auto mt-20 p-3 py-10'>
        {children}
      </section>
      <ToasterNotification />

      <footer className='py-5'>
        <p className='text-center'>
          Todos los Derechos Reservados {new Date().getFullYear()}
        </p>
      </footer>
    </>
  );
}

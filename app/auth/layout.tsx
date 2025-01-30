import Logo from "@/components/ui/Logo";
import ToasterNotification from "@/components/ui/ToasterNotification";


export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>

            <div className="lg:grid lg:grid-cols-2 lg:min-h-screen ">
                <div className="bg-red-500 flex justify-center lg:bg-auth lg:bg-30 bg-no-repeat bg-left-bottom">
                    <div className="py-10 lg:py-20 ">
                        <Logo />
                    </div>
                </div>

                <div className="p-10 lg:py-28">
                    <div className="max-w-3xl mx-auto">
                        {children}
                    </div>
                </div>
            </div>

            <ToasterNotification />
        </>

    );
}

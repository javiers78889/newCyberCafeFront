import type { Metadata } from "next";

import FooterL from "@/components/landingpage/FooterL";
import HeaderL from "@/components/landingpage/HeaderL";
import { ToastContainer } from "react-toastify";
import Image from "next/image";


export const metadata: Metadata = {
  title: "CyberCafeChame - Home",
  description: "CyberCafeChame",
};

export default function LayoutL({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <HeaderL />
      <ToastContainer />
      <main className="flex-1 min-h-screen">
        {children}
      </main>
      <a href="https://wa.me/50765474870" className="fixed bottom-4 right-4 z-50 cursor-pointer">
        <Image src={'/whatsapp.svg'} alt="whatsapp" width={60} height={60}/>
      </a>
      <FooterL />
    </>
  );
}

import type { Metadata } from "next";

import FooterL from "@/components/landingpage/FooterL";
import HeaderL from "@/components/landingpage/HeaderL";
import { ToastContainer } from "react-toastify";
import { MessageCircle } from 'lucide-react'

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
      <a href="https://res.cloudinary.com/dga0uaurm/image/upload/v1747097864/_Pngtree_whatsapp_social_media_icon_design_3654780-removebg-preview_olpu6g.png" className="fixed bottom-4 right-4 z-50 cursor-pointer rounded-full p-3 bg-green-500">
        <MessageCircle height={50} width={50} />
      </a>
      <FooterL />
    </>
  );
}

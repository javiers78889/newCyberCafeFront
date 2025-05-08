import type { Metadata } from "next";

import FooterL from "@/components/landingpage/FooterL";
import HeaderL from "@/components/landingpage/HeaderL";
import MotionFramer from "@/components/ui/MotionFramer";
import MotionFramerx from "@/components/ui/MotionFramerx";


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

      <main className="flex-1 min-h-screen">
        {children}
      </main>
      <FooterL />
    </>
  );
}

import type { Metadata } from "next";
import { Outfit as google } from "next/font/google";
import "./globals.css";

const outfit = google({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "CyberCafeChame - Home",
  description: "CyberCafeChame",
  icons:{
    icon: '/newcyberr.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={outfit.className}
      >
        <div id="inicio" className="">

          {children}
        </div>

      </body>
    </html>
  );
}

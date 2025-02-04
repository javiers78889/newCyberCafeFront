import type { Metadata } from "next";
import { Outfit as google } from "next/font/google";
import "./globals.css";

const outfit = google({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
        <div className="bg-cyan-100">

          {children}
        </div>

      </body>
    </html>
  );
}

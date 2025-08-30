

import { Outfit as google } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";


const outfit = google({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AshBranding&Import",
  description: "HOME",
  icons: {
    icon: [
      { url: "/fete.png?v=2", sizes: "32x32", type: "image/png" },
      { url: "/fete.png?v=2", sizes: "16x16", type: "image/png" }
    ],
    apple: "/fete.png?v=2"
  },
};

export default function RootLayout({ children }: { readonly children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={outfit.className}>
    
          <div id="inicio">{children}</div>
      </body>
    </html>
  );
}

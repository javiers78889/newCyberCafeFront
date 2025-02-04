"use client"
import { rastreoPaquetes } from "@/actions/rastreo-paquetes-action";
import Logo from "@/components/ui/Logo";
import { Button } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";


export default function Home() {
  const ref = useRef<HTMLFormElement>(null)
  
  return (
    <div className="lg:bg-auth bg-no-repeat min-h-screen flex justify-center items-center flex-col">
      <Image src="/fete.png" alt="Logotipo" width={400} height={123} priority />
      <div className="flex flex-col gap-5">
        <div>
          <form action={rastreoPaquetes} className="flex gap-5" ref={ref} >
            <input type="text" name="tracking" id="tracking" placeholder="  Ingresa un tracking" className="rounded-lg p-2 shadow-lg" />
            <input
              type="submit"
              value='Rastrear'
              className="bg-amber-500 hover:bg-amber-800 w-full p-3 rounded-lg text-white font-black  text-xl cursor-pointer block"
            />
          </form>

        </div>
        <Link href='/auth/login' className='bg-blue-500 hover:bg-blue-800 w-full p-3 rounded-lg text-white font-black  text-xl cursor-pointer block text-center'>CYBERCAFEAPP</Link>
      </div>
    </div>
  );
}

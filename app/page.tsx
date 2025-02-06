"use client"

import { rastreoPaquetes } from "@/actions/rastreo-paquetes-action";
import ToasterNotification from "@/components/ui/ToasterNotification";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { useFormState } from "react-dom";
import { toast } from "react-toastify";



export default function Home() {

  const ref = useRef<HTMLFormElement>(null)
  const [state, dispatch] = useFormState(rastreoPaquetes, {
    success: '',
    errors: []
  })

  useEffect(() => {
    if (state?.errors) {

      state.errors.map(n => {
        toast.error(n)
      })
    }
  }, [state])
  return (
    <div className="bg-red-600">
      <div className="lg:bg-auth bg-no-repeat min-h-screen flex justify-center items-center flex-col">
        <ToasterNotification />
        <Image src="/fete-blanco.png" alt="Logotipo" width={400} height={123} priority />
        <div className="flex flex-col gap-5">
          <div>
            <form action={dispatch} className="mt-8 bg-white space-y-5 shadow-xl p-5 e rounded-lg" ref={ref} >
              <div className="flex flex-col gap-2">
                <label
                  className="font-black text-2xl"
                >Rastrear <span className="text-red-500">Paquete</span></label>
                <input
                  id="tracking"
                  type="text"
                  placeholder="Rastrea un tracking"
                  className="w-full border border-gray-300 p-3 rounded-lg"
                  name="tracking"
                />
              </div>
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
    </div>
  );
}

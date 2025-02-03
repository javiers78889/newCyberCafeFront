"use client"
import { editProfile } from '@/actions/edit-profile-action'
import { User } from '@/src/schemas'
import { useRouter } from 'next/navigation'
import React, { useEffect, useRef } from 'react'
import { useFormState } from 'react-dom'
import { toast } from 'react-toastify'

export default function EditFormPerfil({ user }: { user: User }) {
    const ref = useRef<HTMLFormElement>(null)
    const router= useRouter()
    const[state,dispatch]= useFormState(editProfile,{
        success:'',
        errors:[]
    })

    useEffect(()=>{

         if(state.errors){
            state.errors.map(errores=>{
                toast.error(errores)
            })
         }

         if(state.success){
            toast.success(state.success,{
                onClose:()=>{
                    router.push('/admin/perfil')
                }
            })
         }

    },[state])
    return (
        <form
            action={dispatch}
            ref={ref}
            className="mt-14 space-y-5"
            noValidate
        >

            <div className="flex flex-col gap-2">
                <label
                    className="font-bold text-2xl"
                >Nombre</label>
                <input
                    type="name"
                    placeholder="Tracking de Registro"
                    defaultValue={user.nombre}
                    className="w-full border border-gray-300 p-3 rounded-lg"
                    name="nombre"
                />
            </div>

            <div className="flex flex-col gap-2">
                <label
                    className="font-bold text-2xl"
                >Correo</label>
                <input
                    type="email"
                    placeholder="Nuevo Correo"
                    defaultValue={user.correo?(user.correo):('')}
                    className="w-full border border-gray-300 p-3 rounded-lg"
                    name="correo"
                />
            </div>
            <div className="flex flex-col gap-2">
                <label
                    className="font-bold text-2xl"
                >Confirmar Correo</label>
                <input
                    type="email"
                    placeholder="Confirmar Correo"
                    className="w-full border border-gray-300 p-3 rounded-lg"
                    name="correo_confirm"
                />
            </div>


            <input
                type="submit"
                value='Editar'
                className="bg-red-600 hover:bg-red-800 w-full p-3 rounded-lg text-white font-black  text-xl cursor-pointer block"
            />
        </form>
    )
}

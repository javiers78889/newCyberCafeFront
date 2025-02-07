"use client"

import { createPaquetes } from '@/actions/create-paquetes-action'
import React, { useEffect, useRef } from 'react'
import { useFormState } from 'react-dom'
import { toast } from 'react-toastify'

export default function RegisterPaquetes() {
    const ref = useRef<HTMLFormElement>(null)
    const [state, dispatch] = useFormState(createPaquetes, {
        success: '',
        errors: []
    })
    useEffect(()=>{
        if(state.errors){
            state.errors.map(error=>{
                toast.error(error)
            })
        }
        if(state.success){
            toast.success(state.success)
            ref.current?.reset()
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
                    htmlFor="email"
                >Usuario</label>
                <input
                    id="usuario"
                    type="text"
                    placeholder="Usuario de Registro"
                    className="w-full border border-gray-300 p-3 rounded-lg"
                    name="usuario"
                />
            </div>

            <div className="flex flex-col gap-2">
                <label
                    className="font-bold text-2xl"
                >Tracking</label>
                <input
                    type="name"
                    placeholder="Tracking de Registro"
                    className="w-full border border-gray-300 p-3 rounded-lg"
                    name="tracking"
                />
            </div>

            <div className="flex flex-col gap-2">
                <label
                    className="font-bold text-2xl"
                >Peso</label>
                <input
                    type="number"
                    placeholder="Password de Registro"
                    className="w-full border border-gray-300 p-3 rounded-lg"
                    name="peso"
                />
            </div>

            <div className="flex flex-col gap-2">
                <label
                    className="font-bold text-2xl"
                >Plan</label>
                <select id="plan"
                    className="w-full border text-gray-500 border-gray-300 p-3 rounded-lg"
                    name="plan"
                    defaultValue="Elige un plan">
                        <option  value={''}>Elige un plan</option>
                        <option value="aereo">Aereo</option>
                        <option value="maritimo">Maritimo</option>

                </select>

            </div>

            <input
                type="submit"
                value='Registrar'
                className="bg-red-600 hover:bg-red-800 w-full p-3 rounded-lg text-white font-black  text-xl cursor-pointer block"
            />
        </form>
    )
}

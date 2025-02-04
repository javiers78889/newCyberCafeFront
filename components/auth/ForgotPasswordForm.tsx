"use client"

import { forgotPassword } from "@/actions/forgot-password-action"
import { useEffect, useRef } from "react"
import { useFormState } from "react-dom"

export default function ForgotPasswordForm() {
    const ref = useRef(null)
    const [state, dispatch] = useFormState(forgotPassword, {
        errors: [],
        success: ''
    })

    useEffect(() => { //aquí van los mensajes

    }, [state])
    return (
        <form
            action={dispatch}
            ref={ref}
            className=" mt-14 space-y-5"
            noValidate
        >
            <div className="flex flex-col gap-2 mb-10">
                <label
                    className="font-bold text-2xl"
                >Usuario</label>

                <input
                    type="name"
                    placeholder="Ingrese Su Usuario"
                    className="w-full border border-gray-300 p-3 rounded-lg"
                    name="usuario"
                />
            </div>
            <div className="flex flex-col gap-2 mb-10">
                <label
                    className="font-bold text-2xl"
                >Correo</label>

                <input
                    type="email"
                    placeholder="Ingrese su Correo"
                    className="w-full border border-gray-300 p-3 rounded-lg"
                    name="correo"
                />
            </div>
            <div className="flex flex-col gap-2 mb-10">
                <label
                    className="font-bold text-2xl"
                >Contraseña Nueva</label>

                <input
                    type="password"
                    placeholder="Contraseña Nueva"
                    className="w-full border border-gray-300 p-3 rounded-lg"
                    name="password"
                />
            </div>
            <div className="flex flex-col gap-2 mb-10">
                <label
                    className="font-bold text-2xl"
                >Confirmar Contraseña Nueva</label>

                <input
                    type="password"
                    placeholder="Confirmar Contraseña Nueva"
                    className="w-full border border-gray-300 p-3 rounded-lg"
                    name="password_confirm"
                />
            </div>

            <input
                type="submit"
                value='Solicitar'
                className="bg-red-600 hover:bg-red-800 w-full p-3 rounded-lg text-white font-black  text-xl cursor-pointer "
            />
        </form>
    )
}

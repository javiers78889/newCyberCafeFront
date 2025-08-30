'use client'

import { createPaquetes } from '@/actions/create-paquetes-action'
import { getUsers } from '@/actions/get-users-action'
import { useFormState } from 'react-dom'
import { useEffect, useRef, useState } from 'react'
import { toast } from 'react-toastify'

export default function RegisterPaquetes() {
    const ref = useRef<HTMLFormElement>(null)
    const [state, dispatch] = useFormState(createPaquetes, {
        success: '',
        errors: []
    })

    const [users, setUsers] = useState<Array<{
        id: number
        usuario: string
        nombre: string
        correo: string | null,
        telefono: string

    }>>([])

    // Manejo de toasts para errores y éxito
    useEffect(() => {
        if (state.errors) {
            state.errors.forEach(e => toast.error(e))
        }

        if (state.success) {
            toast.success('Paquete registrado correctamente')
            ref.current?.reset()

            // Abrir WhatsApp si state.success es un enlace
            if (typeof state.success === 'string' && state.success.startsWith('https://wa.me/')) {
                window.open(state.success, '_blank')
            }
        }
    }, [state])


    // Cargar usuarios desde API al montar el componente
    useEffect(() => {
        const fetchData = async () => {
            try {
                const { success } = await getUsers()
                // Normalizar datos para que 'correo' nunca sea undefined
                const normalized = success.map(u => ({
                    id: u.id,
                    usuario: u.usuario,
                    nombre: u.nombre,
                    correo: u.correo ?? null,
                    telefono: u.telefono
                }))
                setUsers(normalized)
            } catch (err) {
                console.error(err)
                toast.error('Error cargando usuarios')
            }
        }
        fetchData()
    }, [])


    return (
        <form action={dispatch} ref={ref} className="mt-14 space-y-5" noValidate>
            {/* Selector de usuario */}
            <div className="flex flex-col gap-2">
                <label className="font-bold text-2xl" htmlFor="usuario">
                    Usuario
                </label>
                <select
                    id="usuario"
                    name="usuario"
                    className="w-full border border-gray-300 p-3 rounded-lg text-black"
                >
                    {users.map(u => (
                        <option key={u.id} value={JSON.stringify({ usuario: u.usuario, telefono: u.telefono })}
                        >
                            {u.nombre} ({u.correo ?? 'sin correo'})
                        </option>
                    ))}
                </select>
            </div>

            {/* Tracking */}
            <div className="flex flex-col gap-2">
                <label className="font-bold text-2xl" htmlFor="tracking">
                    Tracking
                </label>
                <input
                    type="text"
                    name="tracking"
                    placeholder="Tracking de Registro"
                    className="w-full border border-gray-300 p-3 rounded-lg"
                />
            </div>

            {/* Peso */}
            <div className="flex flex-col gap-2">
                <label className="font-bold text-2xl" htmlFor="peso">
                    Peso
                </label>
                <input
                    type="number"
                    name="peso"
                    placeholder="Peso del paquete"
                    className="w-full border border-gray-300 p-3 rounded-lg"
                />
            </div>

            {/* Plan */}
            <div className="flex flex-col gap-2">
                <label className="font-bold text-2xl" htmlFor="plan">
                    Plan
                </label>
                <select
                    id="plan"
                    name="plan"
                    className="w-full border border-gray-300 p-3 rounded-lg text-gray-500"
                    defaultValue=""
                >
                    <option value="">Elige un plan</option>
                    <option value="aereo">Aéreo</option>
                    <option value="maritimo">Marítimo</option>
                </select>
            </div>

            {/* Botón de submit */}
            <input
                type="submit"
                value="Registrar"
                className="bg-red-600 hover:bg-red-800 w-full p-3 rounded-lg text-white font-black text-xl cursor-pointer block"
            />
        </form>
    )
}

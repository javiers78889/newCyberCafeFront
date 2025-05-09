"use client"
import { Button } from '@headlessui/react'
import { CheckCircle2 } from 'lucide-react'
import React, { useEffect, useRef } from 'react'
import EstadoEjem from './RastreoItems/EstadoEjem'
import { useFormState } from 'react-dom'
import { rastreoPaquetes } from '@/actions/rastreo-paquetes-action'
import { toast } from 'react-toastify'

export default function RastrearPaquete() {
    const ref = useRef<HTMLFormElement>(null)
    const [state, dispatch] = useFormState(rastreoPaquetes, {
        success: '',
        errors: []
    })

    useEffect(() => {
        if (state?.errors) {

            state.errors.map(n => {
                toast.error(n)
                console.log(n)
            })
        }
    }, [state])
    return (
        <section className="w-full flex items-center justify-center py-12 md:py-16 lg:py-20 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10">
            <div className="container px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                    <div className="flex flex-col justify-center space-y-4">
                        <div className="space-y-2">
                            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                                Rastreo de Paquetes
                            </div>
                            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight"><span className='text-red-500'>¿</span>Dónde está <span className='text-amber-500 '>mi paquete<span className='text-black'>?</span></span></h2>
                            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                Rastrea tus envíos de cualquier tienda en un solo lugar. Ingresa tu número de seguimiento y obtén
                                actualizaciones en tiempo real.
                            </p>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <form action={dispatch} className="flex flex-col sm:flex-row gap-2" ref={ref}>
                                <div className="flex-1">
                                    <input
                                        type="text"
                                        name="tracking"
                                        placeholder="Ingresa tu número de tracking"
                                        className="w-full px-4 py-3 text-base border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                    />
                                </div>
                                <Button className="sm:w-auto bg-red-500 px-4 rounded-lg text-white sm: py-4" type='submit'>
                                    Rastrear Paquete
                                </Button>
                            </form>
                            <p className="text-sm text-muted-foreground">
                                Soportamos rastreo de Amazon, Shein, AliExpress, eBay, DHL, FedEx, UPS y más.
                            </p>
                        </div>
                        <div className="flex items-center space-x-4 text-sm pt-2">
                            <div className="flex items-center gap-1">
                                <CheckCircle2 className="h-4 w-4 text-primary" />
                                <span>Actualizaciones en tiempo real</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <CheckCircle2 className="h-4 w-4 text-primary" />
                                <span>Introduce tu tracking</span>
                            </div>
                        </div>
                    </div>
                    <EstadoEjem />
                </div>
            </div>
        </section>
    )
}

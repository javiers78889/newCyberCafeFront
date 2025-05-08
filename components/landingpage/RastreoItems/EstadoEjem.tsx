import { CheckCircle2 } from 'lucide-react'
import React from 'react'

export default function EstadoEjem() {
    return (
        <div className="relative mx-auto aspect-video overflow-hidden rounded-xl lg:order-last">
            <div className="bg-muted rounded-xl p-6 shadow-lg border">
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div className="space-y-1">
                            <h3 className="text-lg font-medium">Estado del Envío</h3>
                            <p className="text-sm text-muted-foreground">Paquete #TN12345678</p>
                        </div>
                        <div className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800">
                            En Camino
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className="relative">
                            <div className="flex items-center">
                                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                                    <CheckCircle2 className="h-4 w-4" />
                                </div>
                                <div className="ml-4">
                                    <p className="text-sm font-medium">Pedido Confirmado</p>
                                    <p className="text-xs text-muted-foreground">Mayo 5, 2025</p>
                                </div>
                            </div>
                            <div className="absolute left-3 top-6 h-full w-px bg-primary/30" />
                        </div>
                        <div className="relative">
                            <div className="flex items-center">
                                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                                    <CheckCircle2 className="h-4 w-4" />
                                </div>
                                <div className="ml-4">
                                    <p className="text-sm font-medium">Paquete Enviado</p>
                                    <p className="text-xs text-muted-foreground">Mayo 6, 2025</p>
                                </div>
                            </div>
                            <div className="absolute left-3 top-6 h-full w-px bg-primary/30" />
                        </div>
                        <div className="relative">
                            <div className="flex items-center">
                                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                                    <CheckCircle2 className="h-4 w-4" />
                                </div>
                                <div className="ml-4">
                                    <p className="text-sm font-medium">En Centro de Distribución</p>
                                    <p className="text-xs text-muted-foreground">Mayo 7, 2025</p>
                                </div>
                            </div>
                            <div className="absolute left-3 top-6 h-full w-px bg-primary/30" />
                        </div>
                        <div className="relative">
                            <div className="flex items-center">
                                <div className="flex h-6 w-6 items-center justify-center rounded-full border border-primary bg-background">
                                    <div className="h-2 w-2 rounded-full bg-primary" />
                                </div>
                                <div className="ml-4">
                                    <p className="text-sm font-medium">En Camino a Destino</p>
                                    <p className="text-xs text-muted-foreground">Mayo 8, 2025</p>
                                </div>
                            </div>
                            <div className="absolute left-3 top-6 h-full w-px bg-muted" />
                        </div>
                        <div className="relative">
                            <div className="flex items-center">
                                <div className="flex h-6 w-6 items-center justify-center rounded-full border border-muted bg-background">
                                    <div className="h-2 w-2 rounded-full bg-muted" />
                                </div>
                                <div className="ml-4">
                                    <p className="text-sm font-medium">Entregado</p>
                                    <p className="text-xs text-muted-foreground">Pendiente</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

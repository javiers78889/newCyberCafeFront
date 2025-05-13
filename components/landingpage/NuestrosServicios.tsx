import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Globe } from 'lucide-react'

const services = [
    { id: 1, title: 'Casilleros Online Gratis', content: 'Compra desde tu tienda preferida. donde y cuando quieras.' },
    { id: 2, title: 'Casilleros Aéreo', content: 'Miami-Panamá. Tu compra esta segura con nosotros.' },
    { id: 3, title: 'Casilleros Marítimo', content: 'Miami-Panamá. Tu compra esta segura con nosotros.' },
    { id: 4, title: 'Asesoramiento Para Pymes', content: 'Te brindamos asesorias para tus pequeños emprendimientos.' },
]

export default function NuestrosServicios() {
    return (
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 ">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                            CyberCaféChame
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                            Nuestros Servicios
                        </h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Contamos con una gran variedad de servicios de compra por internet y sobretodo al mejor precio.
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
                    {services.map((services) => (
                        <Card key={services.id}>
                            <CardHeader>
                                <Globe className="h-10 w-10 text-primary" />
                                <CardTitle className="mt-4">{services.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    {services.content}
                                </p>
                            </CardContent>
                        </Card>
                    ))}

                </div>
            </div>
        </section>
    )
}

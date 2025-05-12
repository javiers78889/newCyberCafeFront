import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { CheckCircle2, Code, Globe, Laptop, LayoutGrid, Zap } from 'lucide-react'

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
                            Our platform provides all the tools you need to streamline your workflow, collaborate effectively, and
                            scale your business.
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
                    <Card>
                        <CardHeader>
                            <Globe className="h-10 w-10 text-primary" />
                            <CardTitle className="mt-4">Global Reach</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">
                                Connect with customers and partners worldwide with our global infrastructure and localization tools.
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <Laptop className="h-10 w-10 text-primary" />
                            <CardTitle className="mt-4">Cross-Platform</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">
                                Access your work from any device with our responsive web app, mobile apps, and desktop clients.
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <Code className="h-10 w-10 text-primary" />
                            <CardTitle className="mt-4">Developer API</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">
                                Integrate with your existing tools and extend functionality with our comprehensive API.
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <LayoutGrid className="h-10 w-10 text-primary" />
                            <CardTitle className="mt-4">Customizable Dashboard</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">
                                Tailor your workspace to your needs with drag-and-drop widgets and personalized views.
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <Zap className="h-10 w-10 text-primary" />
                            <CardTitle className="mt-4">Lightning Fast</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">
                                Experience blazing performance with our optimized infrastructure and efficient algorithms.
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CheckCircle2 className="h-10 w-10 text-primary" />
                            <CardTitle className="mt-4">Reliable & Secure</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">
                                Rest easy knowing your data is protected with enterprise-grade security and 99.9% uptime.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}

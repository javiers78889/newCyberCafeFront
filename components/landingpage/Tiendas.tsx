import Image from 'next/image'
import React from 'react'


export default function Tiendas() {
    return (
        <section className="w-full flex items-center justify-center py-12 md:py-16 lg:py-20 border-y bg-background">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-2xl font-bold tracking-tighter md:text-3xl">
                            Compra en las mejores tiendas online
                        </h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-lg">
                            Te conectamos con las tiendas más populares del mundo para que encuentres los mejores productos al
                            mejor precio.
                        </p>
                    </div>
                </div>

                <div className="relative mt-10 overflow-hidden">
                    <div className="flex animate-marquee items-center justify-center gap-8 py-4">
                        <div className="flex min-w-max flex-nowrap gap-8">
                            <div className="group relative flex flex-col items-center justify-center space-y-2">
                                <div className="overflow-hidden rounded-lg border bg-background p-4 shadow-sm transition-all duration-200 hover:shadow-md">
                                    <Image
                                        src="/amazon.png"
                                        width={160}
                                        height={80}
                                        alt="Logo de Amazon"
                                        className="h-16 w-40 object-contain"
                                    />
                                </div>
                                <span className="text-sm font-medium">Amazon</span>
                            </div>
                            <div className="group relative flex flex-col items-center justify-center space-y-2">
                                <div className="overflow-hidden rounded-lg border bg-background p-4 shadow-sm transition-all duration-200 hover:shadow-md">
                                    <Image
                                        src=""
                                        width={160}
                                        height={80}
                                        alt="Logo de Shein"
                                        className="h-16 w-40 object-contain"
                                    />
                                </div>
                                <span className="text-sm font-medium">Shein</span>
                            </div>
                            <div className="group relative flex flex-col items-center justify-center space-y-2">
                                <div className="overflow-hidden rounded-lg border bg-background p-4 shadow-sm transition-all duration-200 hover:shadow-md">
                                    <Image
                                        src=""
                                        width={160}
                                        height={80}
                                        alt="Logo de AliExpress"
                                        className="h-16 w-40 object-contain"
                                    />
                                </div>
                                <span className="text-sm font-medium">AliExpress</span>
                            </div>
                            <div className="group relative flex flex-col items-center justify-center space-y-2">
                                <div className="overflow-hidden rounded-lg border bg-background p-4 shadow-sm transition-all duration-200 hover:shadow-md">
                                    <Image
                                        src=""
                                        width={160}
                                        height={80}
                                        alt="Logo de eBay"
                                        className="h-16 w-40 object-contain"
                                    />
                                </div>
                                <span className="text-sm font-medium">eBay</span>
                            </div>
                            <div className="group relative flex flex-col items-center justify-center space-y-2">
                                <div className="overflow-hidden rounded-lg border bg-background p-4 shadow-sm transition-all duration-200 hover:shadow-md">
                                    <Image
                                        src=""
                                        width={160}
                                        height={80}
                                        alt="Logo de Walmart"
                                        className="h-16 w-40 object-contain"
                                    />
                                </div>
                                <span className="text-sm font-medium">Walmart</span>
                            </div>
                            <div className="group relative flex flex-col items-center justify-center space-y-2">
                                <div className="overflow-hidden rounded-lg border bg-background p-4 shadow-sm transition-all duration-200 hover:shadow-md">
                                    <Image
                                        src=""
                                        width={160}
                                        height={80}
                                        alt="Logo de Temu"
                                        className="h-16 w-40 object-contain"
                                    />
                                </div>
                                <span className="text-sm font-medium">Temu</span>
                            </div>
                        </div>
                        <div className="flex min-w-max flex-nowrap gap-8">
                            <div className="group relative flex flex-col items-center justify-center space-y-2">
                                <div className="overflow-hidden rounded-lg border bg-background p-4 shadow-sm transition-all duration-200 hover:shadow-md">
                                    <Image
                                        src=""
                                        width={160}
                                        height={80}
                                        alt="Logo de Amazon"
                                        className="h-16 w-40 object-contain"
                                    />
                                </div>
                                <span className="text-sm font-medium">Amazon</span>
                            </div>
                            <div className="group relative flex flex-col items-center justify-center space-y-2">
                                <div className="overflow-hidden rounded-lg border bg-background p-4 shadow-sm transition-all duration-200 hover:shadow-md">
                                    <Image
                                        src=""
                                        width={160}
                                        height={80}
                                        alt="Logo de Shein"
                                        className="h-16 w-40 object-contain"
                                    />
                                </div>
                                <span className="text-sm font-medium">Shein</span>
                            </div>
                            <div className="group relative flex flex-col items-center justify-center space-y-2">
                                <div className="overflow-hidden rounded-lg border bg-background p-4 shadow-sm transition-all duration-200 hover:shadow-md">
                                    <Image
                                        src=""
                                        width={160}
                                        height={80}
                                        alt="Logo de AliExpress"
                                        className="h-16 w-40 object-contain"
                                    />
                                </div>
                                <span className="text-sm font-medium">AliExpress</span>
                            </div>
                            <div className="group relative flex flex-col items-center justify-center space-y-2">
                                <div className="overflow-hidden rounded-lg border bg-background p-4 shadow-sm transition-all duration-200 hover:shadow-md">
                                    <Image
                                        src=""
                                        width={160}
                                        height={80}
                                        alt="Logo de eBay"
                                        className="h-16 w-40 object-contain"
                                    />
                                </div>
                                <span className="text-sm font-medium">eBay</span>
                            </div>
                            <div className="group relative flex flex-col items-center justify-center space-y-2">
                                <div className="overflow-hidden rounded-lg border bg-background p-4 shadow-sm transition-all duration-200 hover:shadow-md">
                                    <Image
                                        src=""
                                        width={160}
                                        height={80}
                                        alt="Logo de Walmart"
                                        className="h-16 w-40 object-contain"
                                    />
                                </div>
                                <span className="text-sm font-medium">Walmart</span>
                            </div>
                            <div className="group relative flex flex-col items-center justify-center space-y-2">
                                <div className="overflow-hidden rounded-lg border bg-background p-4 shadow-sm transition-all duration-200 hover:shadow-md">
                                    <Image
                                        src=""
                                        width={160}
                                        height={80}
                                        alt="Logo de Temu"
                                        className="h-16 w-40 object-contain"
                                    />
                                </div>
                                <span className="text-sm font-medium">Temu</span>
                            </div>
                        </div>
                    </div>

                    <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent"></div>
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent"></div>
                </div>


            </div>
        </section>
    )
}

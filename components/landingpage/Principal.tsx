"use client"
import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'
const videos = [
    { url: "https://res.cloudinary.com/dkcwi8gob/video/upload/v1746737178/WhatsApp_Video_2025-05-08_at_3.22.35_PM_d9upg4.mp4" },
    { url: "https://res.cloudinary.com/dkcwi8gob/video/upload/v1746738358/WhatsApp_Video_2025-05-08_at_3.22.35_PM_1_eccihe.mp4" },
]

export default function Principal() {
    return (
        <div className="w-full py-8">
            <div className="container px-4 md:px-6">
             

                <Carousel className="w-full max-w-5xl mx-auto">
                    <CarouselContent>
                        {videos.map(video => (

                            <CarouselItem>
                                <div className="p-1">
                                    <div className="overflow-hidden rounded-xl border bg-background">
                                        <div className="relative aspect-video">
                                            <video
                                                controls
                                                autoPlay
                                                className="h-full w-full object-cover"
                                                poster="/placeholder.svg?height=200&width=350"
                                            >
                                                <source src={video.url} type="video/mp4" />
                                                Tu navegador no soporta videos HTML5.
                                            </video>
                                        </div>
                                        <div className="p-4">
                                            <div className="flex justify-center mt-4">
                                                <CarouselPrevious className="relative mr-2" />
                                                <CarouselNext className="relative ml-2" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}

                    </CarouselContent>

                </Carousel>
            </div>
        </div>

    )
}

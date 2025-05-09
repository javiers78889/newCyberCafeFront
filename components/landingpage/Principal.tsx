"use client"

import { MessageCircle } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'
import MotionFramerx from '../ui/MotionFramerx';
import { useState } from 'react';
const videos = [
    { id: 1, url: "https://res.cloudinary.com/dkcwi8gob/video/upload/v1746737178/WhatsApp_Video_2025-05-08_at_3.22.35_PM_d9upg4.mp4" },
    { id: 2, url: "https://res.cloudinary.com/dkcwi8gob/video/upload/v1746812213/WhatsApp_Video_2025-05-09_at_8.10.17_AM_1_jzqwwd.mp4" },
    { id: 3, url: "https://res.cloudinary.com/dkcwi8gob/video/upload/v1746812246/WhatsApp_Video_2025-05-09_at_8.10.20_AM_f2i3dd.mp4" },
    { id: 4, url: "https://res.cloudinary.com/dkcwi8gob/video/upload/v1746812263/WhatsApp_Video_2025-05-09_at_8.10.18_AM_1_fqak6a.mp4" },
    { id: 5, url: "https://res.cloudinary.com/dkcwi8gob/video/upload/v1746812353/WhatsApp_Video_2025-05-09_at_8.10.18_AM_f50evs.mp4" },
]

export default function Principal() {

    const [visible, setVisible] = useState(false)
    const handleVideoEnd = () => {

    };

    const MakeVisible = () => {

        console.log('visible')
        setVisible(!visible)
    }
    return (
        <div className="w-full py-8 lg:py-28 md:py-20 bg-auth bg-no-repeat bg-left-top bg-30 ">
            <div className="container px-4 md:px-6 ">

                <MotionFramerx>
                    <Carousel className="w-full max-w-5xl mx-auto">
                        <CarouselContent>
                            {videos.map(video => (

                                <CarouselItem key={video.id}>
                                    <div className="p-1">
                                        <div className="overflow-hidden rounded-xl border bg-background">
                                            <div className="relative aspect-video">
                                                <video

                                                    autoPlay
                                                    onEnded={handleVideoEnd}
                                                    className="h-full w-full object-cover"

                                                >
                                                    <source src={video.url} type="video/mp4" />
                                                    Tu navegador no soporta videos HTML5.
                                                </video>
                                            </div>

                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}

                        </CarouselContent>
                        <div>
                            <CarouselNext />
                            <CarouselPrevious />
                        </div>
                    </Carousel>
                </MotionFramerx>

                <div className={`fixed  left-6 w-full`} >
                    <div className={` flex items-center bg-green-500 hover:bg-green-700  rounded-full w-fit px-4 py-4 cursor-pointer`} onMouseEnter={MakeVisible} onMouseLeave={MakeVisible}>
                        <MessageCircle className='text-white font-black' />

                    </div>
                    {visible ? (
                        <h2 className='font-bold'>Whatsapp</h2>

                    ) : ''}
                </div>

            </div>
        </div>

    )
}

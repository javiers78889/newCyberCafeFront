"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

// Definición de tipos para los slides
type Slide = {
    id: string
    cloudinaryUrl: string
    title: string
}

// Datos de ejemplo para el carrusel (reemplaza con tus URLs de Cloudinary)
const slides: Slide[] = [
    {
        id: "1",
        cloudinaryUrl: "https://res.cloudinary.com/dkcwi8gob/video/upload/v1746737178/WhatsApp_Video_2025-05-08_at_3.22.35_PM_d9upg4.mp4",
        title: "Tortuga Marina",
    },
    {
        id: "2",
        cloudinaryUrl: "https://res.cloudinary.com/dkcwi8gob/video/upload/v1746812246/WhatsApp_Video_2025-05-09_at_8.10.20_AM_f2i3dd.mp4",
        title: "Elefantes",
    },
    {
        id: "3",
        cloudinaryUrl: "https://res.cloudinary.com/dkcwi8gob/video/upload/v1746812263/WhatsApp_Video_2025-05-09_at_8.10.18_AM_1_fqak6a.mp4",
        title: "Paisaje",
    },
    {
        id: "4",
        cloudinaryUrl: "https://res.cloudinary.com/dkcwi8gob/video/upload/v1746812353/WhatsApp_Video_2025-05-09_at_8.10.18_AM_f50evs.mp4",
        title: "Paisaje",
    },
]

export default function CloudinaryVideoCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({})
    const [isPlaying, setIsPlaying] = useState(false)

    // Función para reproducir el video actual
    const playCurrentVideo = () => {
        const currentSlide = slides[currentIndex]
        const videoElement = videoRefs.current[currentSlide.id]

        // Pausar todos los videos
        Object.values(videoRefs.current).forEach((video) => {
            if (video) {
                video.pause()
            }
        })

        // Reproducir el video actual
        if (videoElement) {
            videoElement.currentTime = 0
            videoElement
                .play()
                .then(() => {
                    setIsPlaying(isPlaying!)
                })
                .catch((error) => {
                    console.error("Error al reproducir el video:", error)
                    // Si falla el autoplay, podemos mostrar un botón para reproducir manualmente
                    setIsPlaying(false)
                })
        }
    }

    // Configurar event listeners para los videos cuando cambia el índice
    useEffect(() => {
        playCurrentVideo()
    }, [currentIndex])

    // Configurar event listeners para los videos cuando se montan
    useEffect(() => {
        const handleVideoEnd = () => {
            goToNextSlide()
        }

        // Añadir event listeners a todos los videos
        slides.forEach((slide) => {
            const videoElement = videoRefs.current[slide.id]
            if (videoElement) {
                videoElement.addEventListener("ended", handleVideoEnd)
            }
        })

        // Limpiar event listeners cuando el componente se desmonte
        return () => {
            slides.forEach((slide) => {
                const videoElement = videoRefs.current[slide.id]
                if (videoElement) {
                    videoElement.removeEventListener("ended", handleVideoEnd)
                }
            })
        }
    }, [videoRefs.current])

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
    }

    const goToPrevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length)
    }

    return (
        <div className="flex flex-col items-center justify-center  lg:p-12 md:p-8 p-4 lg:bg-auth bg-cover">


            <div className="relative w-full max-w-3xl bg-white rounded-lg shadow-lg overflow-hidden">
                {/* Controles de navegación */}
                <div className="absolute top-1/2 left-4 z-10 transform -translate-y-1/2">
                    <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full bg-white/80 hover:bg-white"
                        onClick={goToPrevSlide}
                    >
                        <ChevronLeft className="h-6 w-6" />
                        <span className="sr-only">Anterior</span>
                    </Button>
                </div>

                <div className="absolute top-1/2 right-4 z-10 transform -translate-y-1/2">
                    <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full bg-white/80 hover:bg-white"
                        onClick={goToNextSlide}
                    >
                        <ChevronRight className="h-6 w-6" />
                        <span className="sr-only">Siguiente</span>
                    </Button>
                </div>

                {/* Contenedor del carrusel */}

                <div className="relative w-full aspect-video">
                    {slides.map((slide, index) => (
                        <div
                            key={slide.id}
                            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${index === currentIndex ? "opacity-100 z-20" : "opacity-0 z-10"
                                }`}
                        >
                            <div className="w-full h-full flex flex-col">

                                <div className="w-full flex-1 bg-black">
                                    <video
                                        ref={(el) => {
                                            if (el) {
                                                videoRefs.current[slide.id] = el;
                                            }
                                        }}
                                        className="w-full h-full object-contain"
                                        src={slide.cloudinaryUrl}
                                        playsInline
                                        autoPlay
                                        muted

                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


            </div>


        </div>
    )
}

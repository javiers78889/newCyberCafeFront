"use client"
import { motion } from 'framer-motion'

type Data = {
    children: React.ReactNode,
    ease?: string,
    duracion?: number
}
export default function MotionFramerx({ children, ease, duracion }: Data) {
    console.log(ease)

    const easeset = ease && 'easeOut'
    const duration = duracion && 0.6
    return (
        <motion.article
            initial={{ x: -100, opacity: 0, scale: 0 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: duration, ease: easeset }}
            className=" flex items-center justify-center  w-full"
        >
            {children}
        </motion.article>
    )
}

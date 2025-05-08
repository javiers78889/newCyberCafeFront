"use client"
import { motion } from 'framer-motion'

type Data = {
    children: React.ReactNode,
    ease?: string,
}
export default function MotionFramer({ children, ease }: Data) {
    console.log(ease)

    const easeset = ease && 'easeOut'
    return (
        <motion.header
            initial={{ y: -100, opacity: 0, scale: 0 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: easeset }}
            className=" bg-red-500 flex items-center justify-center  w-full"
        >
            {children}
        </motion.header>
    )
}

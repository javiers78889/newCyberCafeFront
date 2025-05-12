"use client"
import { motion } from 'framer-motion'

type Data = {
    readonly children: React.ReactNode,
    readonly ease?: string,
}
export default function MotionFramer({ children, ease }: Data) {

    const easeset = ease && 'easeOut'
    return (
        <motion.header
            initial={{ y: -100, opacity: 0, scale: 0 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: easeset }}
            className="  flex items-center justify-center  w-full"
        >
            {children}
        </motion.header>
    )
}

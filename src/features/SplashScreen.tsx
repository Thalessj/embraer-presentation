"use client"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

interface SplashScreenProps {
    onFinish?: () => void
}

export default function SplashScreen({ onFinish }: SplashScreenProps) {
    const [isVisible, setIsVisible] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false)
            onFinish?.()
        }, 4000)
        return () => clearTimeout(timer)
    }, [onFinish])

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#0A2342] via-[#1E3A8A] to-[#60A5FA]"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                >
                    <motion.img
                        src="/image/airplane.svg"
                        alt="Embraer Plane"
                        className="w-[20vw] max-w-[120px] md:max-w-[160px] drop-shadow-2xl"
                        initial={{ y: 0, x: 0, scale: 1, rotate: 0 }}
                        animate={{
                            y: "-80vh",
                            x: "15vw",
                            rotate: -20,
                            scale: 1.2,
                        }}
                        transition={{
                            duration: 2.8,
                            ease: [0.45, 0, 0.55, 1],
                        }}
                    />

                    <motion.div
                        className="absolute bottom-1/2 w-[2px] md:w-[3px] h-[25vh] bg-white/40 rounded-full blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: [0.4, 0.3, 0],
                            scaleY: [1, 0.8, 0],
                        }}
                        transition={{
                            duration: 2.5,
                            ease: "easeOut",
                        }}
                    />

                    <motion.div
                        className="absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-t from-white via-white/90 to-transparent"
                        initial={{ y: "100%" }}
                        animate={{ y: "0%" }}
                        transition={{ duration: 2.5, ease: "easeInOut", delay: 1.2 }}
                    />

                    <motion.p
                        className="absolute bottom-[10vh] text-white text-sm md:text-lg tracking-[0.3em] font-light uppercase text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 1.2 }}
                    >
                        Embraer Presentation
                    </motion.p>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

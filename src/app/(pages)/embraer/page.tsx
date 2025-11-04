'use client'

import Timeline from "@/shared/Timeline";
import { motion } from "framer-motion";
import { Plane } from "lucide-react";

export default function Embraer() {
    return (
        <main className="bg-linear-to-br from-gray-900 via-black to-gray-900 flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
            <div className="relative text-center mb-16">
                <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full"></div>

                <motion.div
                    className="absolute -top-10 left-[-100px] text-cyan-400"
                    initial={{ x: "-120%", rotate: -10, opacity: 0 }}
                    animate={{ x: "120%", rotate: 10, opacity: 1 }}
                    transition={{
                        repeat: Infinity,
                        repeatDelay: 5,
                        duration: 6,
                        ease: "easeInOut",
                    }}
                >
                    <Plane size={36} strokeWidth={1.5} />
                </motion.div>

                <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-linear-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent relative z-10 leading-tight">
                    Por que a Embraer
                </h1>
                <div className="h-1 w-32 bg-linear-to-r from-transparent via-blue-500 to-transparent mx-auto mb-6"></div>
                <p className="text-xl text-gray-400 relative z-10">
                    Um pouco sobre o que me motiva a querer fazer parte dessa história.
                </p>
            </div>

            <motion.section
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800/60 rounded-2xl p-10 shadow-lg shadow-blue-800/30 max-w-4xl mx-auto"
            >
                <p className="text-gray-300 leading-relaxed text-lg">
                    A Embraer é uma empresa que representa o melhor do Brasil em inovação e tecnologia.
                    Sempre admirei como ela consegue unir engenharia, propósito e pessoas em torno de algo
                    que literalmente faz o mundo voar.
                    <br /><br />
                    Me identifico muito com o pilar{" "}
                    <span className="text-blue-400 font-semibold">
                        “Ser responsável pelos resultados da empresa”
                    </span>, porque acredito que cada decisão, processo ou linha de código deve gerar valor
                    para o todo, com inteligência, eficiência e cuidado.
                    <br /><br />
                    Quero fazer parte de um ambiente onde eu possa aprender com os melhores, contribuir
                    com soluções reais e continuar crescendo em uma cultura que valoriza autonomia,
                    inovação e paixão por fazer a diferença.
                    <br /><br />
                    Para mim, embarcar na Embraer não é apenas um passo na carreira, é fazer parte de
                    algo maior, que inspira o mundo e mostra até onde o talento brasileiro pode chegar.
                </p>
            </motion.section>
            <Timeline />
        </main>
    );
}

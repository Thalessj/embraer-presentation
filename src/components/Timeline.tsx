'use client'

import { motion } from "framer-motion";
import { Rocket, Code2, Cpu, Building2, Plane, ShieldUser } from "lucide-react";

export default function Timeline() {
    const timeline = [
        {
            year: "2016",
            title: "Primeiro contato com tecnologia",
            description: "Iniciei meu aprendizado em desenvolvimento de jogos na Vector Cursos, foi onde comecei a entender sobre lógica e o poder da programação.",
            icon: <Code2 size={22} />,
        },
        {
            year: "2023",
            title: "WorkeHub - Início na área de desenvolvimento",
            description: "Comecei a atuar profissionalmente em projetos web, estudando React e metodologias ágeis.",
            icon: <Cpu size={22} />,
        },
        {
            year: "2024 / 2025",
            title: "setLocs - Desenvolvimento de Dashboards e Painéis Administrativos (freelancer)",
            description: "Atuei profissionalmente em um projetos de dashboard web, React, Next.js, NextAuth e metodologias ágeis.",
            icon: <ShieldUser size={22} />,
        },
        {
            year: "2025",
            title: "Bracell - Estágio em Desenvolvimento de Sistemas e Operação",
            description: "Integração entre tecnologia e chão de fábrica. Aprendi sobre SAP, análise de dados e automação de processos industriais.",
            icon: <Building2 size={22} />,
        },
        {
            year: "2026",
            title: "Meta: Estágio de TI na Embraer",
            description: "Aplicar meus conhecimentos em software e automação para contribuir com a inovação tecnológica na aviação brasileira.",
            icon: <Plane size={22} />,
        },
    ];

    return (
        <section className="relative max-w-6xl mx-auto py-20 px-4">
            <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full"></div>

            <div className="text-center mb-16 relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Minha Jornada até Aqui
                </h2>
                <div className="h-1 w-32 bg-linear-to-r from-transparent via-blue-500 to-transparent mx-auto mt-3"></div>
                <p className="text-gray-400 mt-4 text-lg">
                    Cada etapa me aproximou um pouco mais do meu objetivo de crescer com propósito e tecnologia.
                </p>
            </div>

            <div className="relative border-l border-blue-600/30 ml-6">
                {timeline.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        className="mb-10 ml-6 relative z-10"
                    >
                        <span className="absolute -left-8 flex items-center justify-center w-10 h-10 bg-gray-900 border border-blue-500/50 rounded-full text-blue-400">
                            {item.icon}
                        </span>

                        <div className="bg-gray-900/50 border border-gray-700/50 backdrop-blur-sm p-6 rounded-2xl hover:border-blue-500/40 transition duration-300">
                            <h3 className="text-xl font-semibold text-blue-400 mb-1">
                                {item.year} — {item.title}
                            </h3>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="flex justify-center mt-12 text-cyan-400"
            >
                <Rocket size={32} />
            </motion.div>
        </section>
    );
}

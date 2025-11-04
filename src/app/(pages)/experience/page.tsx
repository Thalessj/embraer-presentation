import Card from "@/components/Cards";
import Image from "next/image";

export default function Experience() {
    const experiences = [
        {
            role: "Estagiário Superior em TI (meta para 2026)",
            company: "Embraer",
            logo: "/image/embraer_logo.png",
            period: "2026 - ? (Meta)",
            description: [
                "Busco desenvolver habilidades práticas em sistemas corporativos e integração de tecnologias da aviação.",
                "Pretendo aprimorar meus conhecimentos em desenvolvimento de modo geral, automação de processos e engenharia de software aplicada à indústria aeronáutica.",
                "Meu foco é compreender o fluxo completo entre desenvolvimento, inovação e operação, contribuindo para soluções eficientes e seguras.",
            ],
            variant: "blue" as const,
        },
        {
            role: "Estagiário em Desenvolvimento de Sistemas e Operação",
            company: "Bracell",
            logo: "/image/bracell_logo-2020.png",
            period: "2025 - Atual",
            description: [
                "Acompanhamento de processos industriais e operação de sistemas de produção de Papel.",
                "Comunicação direta com equipes de qualidade e manutenção, garantindo fluxo de produção contínuo.",
                "Análise e atualização de etiquetas com QR Code para rastreio de bobinas.",
                "Essa vivência me mostrou o quanto tecnologia e operação se conectam, e como cada dado ou processo impacta diretamente o resultado real da produção",
            ],
            variant: "blue" as const,
        },
        {
            role: "Desenvolvedor de Software (Freelancer)",
            company: "SetLocs",
            logo: "/image/setLocs_logo.png",
            period: "2024 - 2025",
            description: [
                "Desenvolvimento de painel administrativo web utilizando Next.js e TypeScript.",
                "Desenvolver interfaces modernas e intuitivas com TailwindCSS e integração com APIs.",
                "Criação de soluções de autenticação seguras com NextAuth e JWT.",
            ],
            variant: "blue" as const,
        },
        {
            role: "Desenvolvedor Front-end",
            company: "WorkeHub",
            logo: "/image/workehub_logo.png",
            period: "2023 - 2024",
            description: [
                "Criação de interfaces responsivas e interativas utilizando frameworks modernos como React, Nextjs, garantindo uma experiência de usuário fluida em múltiplos dispositivos..",
                "Foco em interfaces modernas e intuitivas com Css-in-Js e integração com APIs.",
                "Criação de soluções de autenticação seguras com NextAuth e JWT.",
            ],
            variant: "blue" as const,
        },
    ];

    return (
        <main className="min-h-screen bg-linear-to-br from-gray-900 via-black to-gray-900 px-4 py-24">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16 relative">
                    <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full"></div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-linear-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent relative z-10 leading-tight">
                        Experiência Profissional
                    </h1>
                    <div className="h-1 w-32 bg-linear-to-r from-transparent via-blue-500 to-transparent mx-auto mb-6"></div>
                    <p className="text-xl text-gray-400 relative z-10">
                        Conheça um pouco das minhas experiências e aprendizados até aqui.
                    </p>
                </div>

                <section className="grid md:grid-cols-2 gap-8 mb-16">
                    {experiences.map((exp, index) => (
                        <Card key={index} title={exp.role} variant={exp.variant}>
                            <div className="flex items-center gap-4 mb-4">
                                <Image
                                    src={exp.logo}
                                    alt={exp.company}
                                    width={48}
                                    height={48}
                                    className="rounded-lg border border-gray-700 bg-white/10 p-1"
                                />
                                <div>
                                    <p className="text-lg font-semibold text-white">{exp.company}</p>
                                    <p className="text-gray-400 text-sm">{exp.period}</p>
                                </div>
                            </div>
                            <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm">
                                {exp.description.map((desc, i) => (
                                    <li key={i}>{desc}</li>
                                ))}
                            </ul>
                        </Card>
                    ))}
                </section>

                <section className="text-center mt-20">
                    <h2 className="text-3xl font-bold text-blue-400 mb-6">Destaques</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto mb-8">
                        Além das experiências técnicas, valorizo o aprendizado contínuo, a comunicação e o trabalho em equipe, pilares que me conectam à cultura da Embraer.
                    </p>
                    <div className="flex justify-center gap-6 flex-wrap">
                        <span className="px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300">Comunicação</span>
                        <span className="px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-300">Autonomia</span>
                        <span className="px-4 py-2 rounded-full bg-green-500/20 border border-green-500/30 text-green-300">Aprendizado Contínuo</span>
                        <span className="px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300">Responsabilidade</span>
                    </div>
                </section>
            </div>
        </main>
    );
}

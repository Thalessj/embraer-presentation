import Card from "@/shared/Cards";
import Image from "next/image";

export default function Formations() {
    const formations = [
        {
            title: "Graduação",
            institution: "São Judas Tadeu - POLO Bauru",
            course: "Ciência da Computação",
            period: "2025 - 2028",
            status: "Em andamento",
            variant: "blue" as const,
        },
        {
            title: "Ensino Médio / Técnico em Meio Ambiente",
            institution: "ETEC Dona Sebastiana de Barros - SM",
            course: "Ensino Médio Integrado ao Técnico em Meio Ambiente Completo",
            period: "2022 - 2024",
            status: "Concluído",
            variant: "cyan" as const,
        },
        {
            title: "Técnico em Desenvolvimento de Sistemas",
            institution: "Ecid",
            course: "Técnico",
            period: "2025 - 2026",
            status: "Em andamento",
            variant: "blue" as const,
        },
        {
            title: "Técnico em Química",
            institution: "ETEC Dona Sebastiana de Barros - SM",
            course: "Técnico",
            period: "2024 - 2025",
            status: "Concluído",
            variant: "cyan" as const,
        },
    ];

    const courses = [
        {
            title: "Desenvolvimento Web Full Stack",
            platform: "OneBitCode",
            description: "React, Next.js, Node.js, TypeScript",
            period: "2023 - 2024",
            variant: "blue" as const,
        },
        {
            title: "Desenvolvimento de Jogos",
            platform: "Vector Cursos",
            description: "Fundamentos de desenvolvimento de jogos",
            period: "2016 - 2018",
            variant: "blue" as const,
        },
    ];

    return (
        <>
            <main className="min-h-screen bg-linear-to-br from-gray-900 via-black to-gray-900 px-4 py-24">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16 relative">
                        <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full"></div>
                        <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-linear-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent relative z-10 leading-tight">
                            Formações Acadêmica
                        </h1>
                        <div className="h-1 w-32 bg-linear-to-r from-transparent via-blue-500 to-transparent mx-auto mb-6"></div>
                        <p className="text-xl text-gray-400 relative z-10">
                            Educação e Qualificações Profissionais
                        </p>
                    </div>

                    <section className="mb-16">
                        <h2 className="text-3xl font-bold text-blue-400 mb-8 flex items-center gap-3">
                            <span className="w-2 h-8 bg-blue-500 rounded-full"></span>
                            Educação Formal
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {formations.map((formation, index) => (
                                <Card
                                    key={index}
                                    title={formation.title}
                                    variant={formation.variant}
                                >
                                    <div className="space-y-2">
                                        <p className="font-semibold text-lg">{formation.institution}</p>
                                        <p className="text-cyan-300">{formation.course}</p>
                                        <p className="text-gray-400">{formation.period}</p>
                                        <span className={`inline-block px-3 py-1 rounded-full text-sm ${formation.status === "Em andamento"
                                            ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                                            : "bg-green-500/20 text-green-300 border border-green-500/30"
                                            }`}>
                                            {formation.status}
                                        </span>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </section>

                    <section className="mb-16">
                        <h2 className="text-3xl font-bold text-blue-400 mb-8 flex items-center gap-3">
                            <span className="w-2 h-8 bg-cyan-500 rounded-full"></span>
                            Cursos Complementares
                        </h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {courses.map((course, index) => (
                                <Card
                                    key={index}
                                    title={course.title}
                                    variant={course.variant}
                                >
                                    <div className="space-y-2">
                                        <p className="text-blue-300 font-medium">{course.platform}</p>
                                        <p className="text-sm">{course.description}</p>
                                        <p className="text-gray-400 text-sm">{course.period}</p>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </section>

                    <section className="mb-16">
                        <div className="grid md:grid-cols-2 gap-8 w-full mb-12">
                            <div className="relative group">
                                <div className="absolute bg-linear-to-r from-blue-600 to-cyan-600 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition duration-500"></div>
                                <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-3 overflow-hidden">
                                    <Image
                                        src="/image/thales-joia.jpg"
                                        alt="Thales Estevam Godinho"
                                        width={500}
                                        height={500}
                                        className="rounded-xl w-full h-auto"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col justify-center space-y-6">
                                <div className="bg-gray-900/40 backdrop-blur-md border border-gray-700/30 rounded-xl p-6 hover:border-blue-500/50 transition duration-300">
                                    <Card title="Apresentação JOIA (Unesp Botucatu)" variant="cyan">
                                        <p>Participei da Apresentação JOIA (Jovens Iniciativas Acadêmicas), realizada na Unesp Botucatu, representando a turma anterior do curso técnico em Meio Ambiente, onde fui responsável por apresentar o trabalho de conclusão de curso da classe do ano passado.
                                            Além disso, o meu atual TCC, desenvolvido em grupo, foi premiado no evento pelo destaque em relevância ambiental e qualidade técnica, sendo apresentado por outro integrante da equipe.
                                            Essa experiência me proporcionou contato direto com o meio acadêmico, aprimorou minhas habilidades de comunicação e exposição em público, e reforçou minha visão sobre o impacto da ciência e da tecnologia na sustentabilidade.</p>
                                    </Card>
                                </div>
                            </div>
                        </div>
                        <div className="flex w-full gap-8 mb-12 flex-col">
                            <div className="text-center mb-6">
                                <h2 className="text-3xl font-bold text-white mb-2">Certificados</h2>
                                <p className="text-gray-400">Alguns dos cursos e conquistas que concluí ao longo desses anos.</p>
                            </div>

                            <div className="relative group">
                                <div className="absolute bg-linear-to-r from-purple-600 to-pink-500 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition duration-500"></div>
                                <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 flex flex-col items-center text-center gap-4 transition duration-300 hover:border-purple-500/50">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-3-3v6m9 3V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2z" />
                                    </svg>
                                    <h3 className="text-xl font-semibold text-white">Acessar Certificados</h3>
                                    <p className="text-gray-400">Visualize todos os meus certificados diretamente no Google Drive.</p>
                                    <a
                                        href="https://drive.google.com/drive/folders/18UW2bCQ4pDYQLabwWfD8LMjOITM6Ub_Q"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-6 py-2 rounded-lg bg-linear-to-r from-purple-600 to-pink-500 text-white font-medium hover:scale-105 transition duration-300"
                                    >
                                        Ver no Google Drive
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-blue-400 mb-8 flex items-center gap-3">
                            <span className="w-2 h-8 bg-blue-500 rounded-full"></span>
                            Habilidades Técnicas
                        </h2>
                        <Card title="Stack de Tecnologias" variant="blue">
                            <div className="grid md:grid-cols-3 gap-4">
                                <div>
                                    <h3 className="text-cyan-400 font-semibold mb-2">Frontend</h3>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-sm">React</span>
                                        <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-sm">JavaScript</span>
                                        <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-sm">Next.js</span>
                                        <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-sm">TypeScript</span>
                                        <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-sm">Tailwind</span>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-cyan-400 font-semibold mb-2">Backend</h3>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-sm">Node.js</span>
                                        <span className="px-3 py-1 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-sm">Express</span>
                                        <span className="px-3 py-1 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-sm">PostgreSQL</span>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-cyan-400 font-semibold mb-2">Ferramentas</h3>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-sm">Git</span>
                                        <span className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-sm">GitHub</span>
                                        <span className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-sm">VS Code</span>
                                        <span className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-sm">NextAuth</span>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </section>
                </div>
            </main>
        </>
    );
}
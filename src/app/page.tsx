import Card from "@/components/Cards";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="bg-linear-to-br from-gray-900 via-black to-gray-900 flex justify-center items-center px-4 py-24">
        <div className="flex flex-col items-center max-w-6xl w-full">
          <div className="text-center mb-8 relative">
            <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full"></div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-linear-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent relative z-10 leading-tight">
              Quem é o Thales
            </h1>
            <div className="h-1 w-32 bg-linear-to-r from-transparent via-blue-500 to-transparent mx-auto mb-8"></div>
            <p className="text-2xl md:text-3xl text-gray-300 font-light relative z-10 mb-2">
              Candidato TI Embraer 2026
            </p>
            <p className="text-lg text-gray-500 relative z-10">
              Processo Seletivo de Tecnologia da Informação
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 w-full mb-12">
            <div className="relative group">
              <div className="absolute bg-linear-to-r from-blue-600 to-cyan-600 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition duration-500"></div>
              <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-3 overflow-hidden">
                <Image
                  src="/image/thales-photo.jpg"
                  alt="Thales Estevam Godinho"
                  width={500}
                  height={500}
                  className="rounded-xl w-full h-auto"
                />
              </div>
            </div>

            <div className="flex flex-col justify-center space-y-6">
              <div className="bg-gray-900/40 backdrop-blur-md border border-gray-700/30 rounded-xl p-6 hover:border-blue-500/50 transition duration-300">
                <Card title="Sobre a Apresentação" variant="cyan">
                  <p>Este site foi desenvolvido como parte do processo seletivo para a vaga de TI na Embraer,
                    demonstrando minhas habilidades técnicas e criatividade.</p>
                </Card>

              </div>

              <div className="bg-gray-900/40 backdrop-blur-md border border-gray-700/30 rounded-xl p-6 hover:border-cyan-500/50 transition duration-300">
                <Card title="Informações" variant="cyan">
                  Tenho 19 anos, sou de Areiópolis - SP e sempre fui fascinado por entender como as coisas funcionam, desde motores até linhas de código.
                  Fora da tecnologia, gosto de explorar novas ideias, aprender coisas diferentes e buscar desafios que me tirem da zona de conforto.
                  Acredito que a curiosidade é o combustível da inovação.
                </Card>
              </div>
            </div>
          </div>
          <div className="flex md:flex-row gap-8 mb-12">
            <div className="flex flex-col justify-center space-y-6">
              <div className="bg-gray-900/40 backdrop-blur-md border border-gray-700/30 rounded-xl p-6 hover:border-cyan-500/50 transition duration-300">
                <Card title="Fora do código" variant="cyan">
                  <ul>
                    <li>🎮 Tecnologia e jogos</li>
                    <li>✈️ Curiosidade por engenharia e aviação</li>
                    <li>📚 Aprendizado contínuo</li>
                  </ul>
                  <p>Sou o tipo de pessoa que aprende rápido, busca entender o porquê das coisas e gosta de entregar resultados de verdade.</p>
                  <p>Desde cedo, o universo dos jogos me ensinou sobre estratégia e curiosidade técnica — algo que levo até hoje pro desenvolvimento</p>
                </Card>
              </div>
            </div>
          </div>
          <Link href="/formations" className=" flex-1">
            <div>
              <p>Veja minha trajetória acadêmica ↓</p>
            </div>
          </Link>
        </div>
      </main>
    </>
  );
}
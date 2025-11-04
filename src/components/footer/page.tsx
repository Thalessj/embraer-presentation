export default function Footer() {
    return (
        <>
            <footer className="w-full py-6 px-8 bg-gray-900/70 backdrop-blur-sm border-t border-gray-700/50 text-center text-gray-400 text-sm">
                © <span>{new Date().getFullYear()}</span> Feito com 💙 por Thales — inspirado pela inovação da Embraer.
            </footer>
        </>
    )
}
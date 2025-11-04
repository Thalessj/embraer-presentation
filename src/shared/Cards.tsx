import { Cards } from '@/types/post.interface';

export default function Card({ title, children, variant = 'default', className = '' }: Cards) {
    const variants = {
        blue: 'hover:border-blue-500/50',
        cyan: 'hover:border-cyan-500/50',
        purple: 'hover:border-purple-500/50',
        default: 'hover:border-gray-500/50'
    };

    const titleColors = {
        blue: 'text-blue-400',
        cyan: 'text-cyan-400',
        purple: 'text-purple-400',
        default: 'text-gray-300'
    };

    return (
        <>
            <div className={`bg-gray-900/40 backdrop-blur-md border border-gray-700/30 rounded-xl p-6 transition duration-300 ${variants[variant]} ${className}`}>
                <h2 className={`text-2xl font-bold mb-3 ${titleColors[variant]}`}>
                    {title}
                </h2>
                <div className="text-gray-300 leading-relaxed">
                    {children}
                </div>
            </div>
        </>
    )
}
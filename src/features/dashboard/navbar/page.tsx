'use client'
import { Menu, X, Plane } from "lucide-react";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [direction, setDirection] = useState<"forward" | "backward" | null>(null);
    const prevPathRef = useRef(pathname);

    const NavItems = [
        { name: "Sobre", href: "/" },
        { name: "Formação", href: "/formations" },
        { name: "Experiência", href: "/experience" },
        { name: "Embraer", href: "/embraer" },
    ];

    useEffect(() => {
        const prevIndex = NavItems.findIndex(i => i.href === prevPathRef.current);
        const currentIndex = NavItems.findIndex(i => i.href === pathname);
        if (prevIndex !== -1 && currentIndex !== -1) {
            setDirection(currentIndex > prevIndex ? "forward" : "backward");
        }
        prevPathRef.current = pathname;
    }, [pathname]);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <nav className="w-full fixed z-50 py-6 px-8 bg-gray-900/70 backdrop-blur-sm rounded-b-xl shadow-xl shadow-[#004C97]">
            <div className="flex justify-between items-center">
                <div className="text-xl font-bold text-blue-400">Embraer TI 2026</div>

                <div className="hidden md:flex space-x-8 relative">
                    {NavItems.map((item) => {
                        const isActive = pathname === item.href;

                        return (
                            <div key={item.name} className="relative">
                                <Link
                                    href={item.href}
                                    className={`px-4 py-2 rounded-xl transition duration-300 ${isActive
                                        ? 'text-blue-400 bg-blue-500/20 border border-blue-500'
                                        : 'text-gray-300 hover:text-blue-400 border border-blue-800 hover:bg-blue-900/20'
                                        }`}
                                >
                                    {item.name}
                                </Link>

                                {isActive && (
                                    <motion.div
                                        layoutId="plane"
                                        transition={{ type: "spring", stiffness: 380, damping: 25 }}
                                        className="absolute -bottom-4 left-1/2 transform -translate-x-1/2"
                                    >
                                        <motion.div
                                            key={direction}
                                            animate={{
                                                rotate: direction === "backward" ? -135 : 45,
                                                x: direction === "backward" ? -5 : 5,
                                            }}
                                            transition={{ duration: 0.4 }}
                                        >
                                            <Plane className="text-white" size={25} />
                                        </motion.div>
                                    </motion.div>
                                )}
                            </div>
                        );
                    })}
                </div>

                <button
                    onClick={toggleMenu}
                    className="md:hidden text-gray-300 hover:text-blue-400 transition duration-300"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <div className="flex flex-col space-y-3 pb-4">
                    {NavItems.map((item) => {
                        const isActive = pathname === item.href;

                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={closeMenu}
                                className={`p-3 rounded-xl transition duration-300 text-center ${isActive
                                    ? 'text-blue-400 bg-blue-500/20 border border-blue-500'
                                    : 'text-gray-300 hover:text-blue-400 border border-blue-800 hover:bg-blue-900/20'
                                    }`}
                            >
                                {item.name}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
}

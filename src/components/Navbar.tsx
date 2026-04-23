"use client";
import { useState, useEffect } from "react";
import { Menu, X, Code2 } from "lucide-react";
import { motion } from "framer-motion";

const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-slate-950/80 backdrop-blur-md border-b border-cyan-900/30 shadow-lg shadow-cyan-900/10 py-3" : "bg-transparent py-5"}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-2 cursor-pointer group">
                        <div className="p-2 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl group-hover:shadow-[0_0_15px_rgba(6,182,212,0.5)] transition-all">
                            <Code2 className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-2xl font-black tracking-tight text-white">
                            DangKhoii<span className="text-cyan-400">.Dev</span>
                        </span>
                    </motion.div>

                    <div className="hidden md:flex space-x-8">
                        {navItems.map((item, index) => (
                            <motion.a key={item.name} href={item.href} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="text-slate-300 hover:text-cyan-400 text-sm font-bold tracking-wide uppercase transition-colors relative group">
                                {item.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full"></span>
                            </motion.a>
                        ))}
                    </div>

                    <div className="md:hidden flex items-center">
                        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-slate-300 hover:text-cyan-400 focus:outline-none">
                            {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                        </button>
                    </div>
                </div>
            </div>

            {mobileMenuOpen && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="md:hidden bg-slate-950 border-b border-cyan-900/30">
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        {navItems.map((item) => (
                            <a key={item.name} href={item.href} onClick={() => setMobileMenuOpen(false)} className="block px-3 py-3 text-base font-bold text-slate-300 hover:text-cyan-400 hover:bg-slate-900/50 rounded-lg">
                                {item.name}
                            </a>
                        ))}
                    </div>
                </motion.div>
            )}
        </nav>
    );
}

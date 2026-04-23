"use client";
import { motion } from "framer-motion";
import { ArrowRight, Download, Terminal, Cpu } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-slate-950">
            {/* Cyber/Tech Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#083344_1px,transparent_1px),linear-gradient(to_bottom,#083344_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20"></div>

            {/* Abstract Glowing Orbs */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan-600 rounded-full mix-blend-screen filter blur-[128px] opacity-40 animate-blob"></div>
            <div className="absolute top-1/3 -right-20 w-96 h-96 bg-indigo-600 rounded-full mix-blend-screen filter blur-[128px] opacity-40 animate-blob animation-delay-2000"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
                <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease: "easeOut" }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-950/50 border border-cyan-800/50 text-cyan-400 text-sm font-bold tracking-wide uppercase mb-8 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                    <span className="flex h-2 w-2 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                    </span>
                    System Online & Ready
                </motion.div>

                <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tighter">
                    Hi, I'm <br className="md:hidden" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 drop-shadow-[0_0_30px_rgba(6,182,212,0.4)]">
                        Pham Dang Khoi
                    </span>
                </motion.h1>

                <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="text-xl md:text-2xl text-slate-400 font-medium mb-4 max-w-3xl mx-auto tracking-tight">
                    Computer Science Student <span className="text-cyan-500">|</span> Passionate about Web Dev & AI
                </motion.p>

                <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }} className="text-lg md:text-xl text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed">
                    Focused on <span className="text-slate-300 font-semibold border-b border-cyan-500/30 pb-0.5">agentic coding</span>, building <span className="text-slate-300 font-semibold">AI-integrated applications</span>, and cross-platform software development.
                </motion.p>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a href="#projects" className="group relative px-8 py-4 bg-cyan-500 overflow-hidden rounded-2xl w-full sm:w-auto shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] transition-all">
                        <div className="absolute inset-0 w-0 bg-cyan-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                        <div className="relative flex items-center justify-center gap-2 text-slate-950 font-extrabold text-lg">
                            <Terminal className="w-5 h-5" />
                            <span>View Projects</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </div>
                    </a>

                    <a href="#contact" className="group px-8 py-4 bg-slate-900 border border-slate-700 hover:border-cyan-500 rounded-2xl w-full sm:w-auto flex items-center justify-center gap-2 text-white font-bold text-lg hover:bg-slate-800 transition-all hover:shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                        <Download className="w-5 h-5 text-cyan-400 group-hover:-translate-y-1 transition-transform" />
                        <span>Resume / Contact</span>
                    </a>
                </motion.div>
            </div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }} className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
                <span className="text-slate-500 text-sm font-bold tracking-widest uppercase mb-2">Scroll</span>
                <div className="w-1 h-12 bg-slate-800 rounded-full overflow-hidden">
                    <motion.div animate={{ y: [0, 48, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }} className="w-full h-1/2 bg-cyan-500 rounded-full shadow-[0_0_10px_rgba(6,182,212,1)]" />
                </div>
            </motion.div>
        </section>
    );
}

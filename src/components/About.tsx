"use client";
import { motion } from "framer-motion";
import { Server, Database, BrainCircuit, Blocks } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="py-32 bg-slate-950 relative overflow-hidden flex items-center">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-900/20 rounded-full blur-[120px] -z-10"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.5 }} className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">About Me</h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} className="space-y-6">
                        <h3 className="text-3xl font-bold text-slate-200 mb-6 tracking-tight">Turning Complexity into Elegance</h3>
                        <p className="text-lg text-slate-400 leading-relaxed font-medium">
                            As a Computer Science student, my core foundation lies in backend development and system architecture. However, my true passion is <span className="text-cyan-400 font-bold">Agentic Coding</span> and integrating <span className="text-blue-400 font-bold">Artificial Intelligence</span> into practical web applications.
                        </p>
                        <p className="text-lg text-slate-400 leading-relaxed font-medium">
                            I excel at designing robust databases, optimizing complex logic, and deploying intelligent systems that solve real-world problems.
                        </p>

                        <div className="grid grid-cols-2 gap-6 pt-6">
                            <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 hover:border-cyan-500/50 transition-colors shadow-lg">
                                <Server className="w-10 h-10 text-cyan-500 mb-4" />
                                <h4 className="font-bold text-slate-200 mb-2">Backend & APIs</h4>
                                <p className="text-slate-500 text-sm">Scalable architecture</p>
                            </div>
                            <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 hover:border-indigo-500/50 transition-colors shadow-lg">
                                <Database className="w-10 h-10 text-indigo-500 mb-4" />
                                <h4 className="font-bold text-slate-200 mb-2">Database Design</h4>
                                <p className="text-slate-500 text-sm">Complex data modeling</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, delay: 0.2 }} className="relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-indigo-600 rounded-3xl blur-[80px] opacity-20"></div>
                        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-10 relative z-10 glass-effect overflow-hidden shadow-2xl">
                            <div className="absolute -top-10 -right-10 opacity-5">
                                <BrainCircuit className="w-64 h-64 animate-pulse" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <Blocks className="w-8 h-8 text-cyan-400" />
                                Personal Highlight
                            </h3>
                            <p className="text-lg text-slate-400 leading-relaxed font-medium relative z-20">
                                Beyond coding, I'm a huge fan of <strong className="text-cyan-400">LEGO</strong>. Building LEGO sets is incredibly similar to software development: combining small, fundamental blocks to create complex, functional masterpieces. It fuels my creativity and structural thinking.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

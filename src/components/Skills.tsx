"use client";
import { motion } from "framer-motion";
import { Cpu, AppWindow, Database } from "lucide-react";

const skillCategories = [
    {
        title: "AI & Machine Learning",
        icon: <Cpu className="w-8 h-8 text-cyan-400" />,
        color: "from-cyan-950 to-slate-950",
        borderHover: "hover:border-cyan-500/50",
        shadowHover: "hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]",
        badgeBg: "bg-cyan-950/40 border-cyan-800/40 text-cyan-300",
        badgeHover: "hover:bg-cyan-500 hover:text-slate-950 font-bold",
        skills: ["Fine-tuning LLMs", "Qwen2.5", "PhoGPT", "Unsloth", "Digital Signal Processing", "DeepFilterNet", "TFLite"],
    },
    {
        title: "Development & Coding",
        icon: <AppWindow className="w-8 h-8 text-blue-400" />,
        color: "from-blue-950 to-slate-950",
        borderHover: "hover:border-blue-500/50",
        shadowHover: "hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]",
        badgeBg: "bg-blue-950/40 border-blue-800/40 text-blue-300",
        badgeHover: "hover:bg-blue-500 hover:text-slate-950 font-bold",
        skills: ["Python", "Flutter", "C++", "Cursor", "Claude Code"],
    },
    {
        title: "Database & System",
        icon: <Database className="w-8 h-8 text-emerald-400" />,
        color: "from-emerald-950 to-slate-950",
        borderHover: "hover:border-emerald-500/50",
        shadowHover: "hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]",
        badgeBg: "bg-emerald-950/40 border-emerald-800/40 text-emerald-300",
        badgeHover: "hover:bg-emerald-500 hover:text-slate-950 font-bold",
        skills: ["PostgreSQL", "Database Schema Design"],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="py-32 bg-slate-950 border-t border-slate-900 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-40"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">Skills & Tech Stack</h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-500 to-indigo-600 mx-auto rounded-full shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`bg-slate-900 rounded-3xl p-8 border border-slate-800 transition-all duration-500 hover:-translate-y-2 ${category.borderHover} ${category.shadowHover} bg-gradient-to-b ${category.color} shadow-lg`}
                        >
                            <div className="w-16 h-16 bg-slate-950 rounded-2xl flex items-center justify-center mb-8 shadow-inner border border-slate-800">
                                {category.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-6">{category.title}</h3>
                            <div className="flex flex-wrap gap-2.5">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className={`px-4 py-2 rounded-xl text-sm border transition-all duration-300 ${category.badgeBg} ${category.badgeHover} cursor-default`}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

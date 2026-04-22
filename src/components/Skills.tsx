"use client";
import { motion } from "framer-motion";
import { Cpu, AppWindow, Database } from "lucide-react";

const skillCategories = [
    {
        title: "AI & Machine Learning",
        icon: <Cpu className="w-8 h-8 text-indigo-600" />,
        color: "from-indigo-50 to-purple-50",
        borderHover: "hover:border-indigo-300",
        shadowHover: "hover:shadow-indigo-500/20",
        badgeBg: "bg-indigo-100/50",
        badgeHover: "hover:bg-indigo-600 hover:text-white border-transparent hover:border-indigo-600",
        skills: ["Fine-tuning LLMs", "Qwen2.5", "PhoGPT", "Unsloth", "Digital Signal Processing", "DeepFilterNet", "TFLite"],
    },
    {
        title: "Development & Coding",
        icon: <AppWindow className="w-8 h-8 text-blue-600" />,
        color: "from-blue-50 to-cyan-50",
        borderHover: "hover:border-blue-300",
        shadowHover: "hover:shadow-blue-500/20",
        badgeBg: "bg-blue-100/50",
        badgeHover: "hover:bg-blue-600 hover:text-white border-transparent hover:border-blue-600",
        skills: ["Python", "Flutter", "C++", "Cursor", "Claude Code"],
    },
    {
        title: "Database & System",
        icon: <Database className="w-8 h-8 text-emerald-600" />,
        color: "from-emerald-50 to-teal-50",
        borderHover: "hover:border-emerald-300",
        shadowHover: "hover:shadow-emerald-500/20",
        badgeBg: "bg-emerald-100/50",
        badgeHover: "hover:bg-emerald-600 hover:text-white border-transparent hover:border-emerald-600",
        skills: ["PostgreSQL", "Database Schema Design"],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="py-32 bg-slate-50 relative overflow-hidden">
            {/* Abstract Background pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-40"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Kỹ Năng & Công Nghệ</h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`bg-white rounded-3xl p-8 border-2 border-slate-100 shadow-sm transition-all duration-500 hover:-translate-y-2 ${category.borderHover} ${category.shadowHover} hover:shadow-xl bg-gradient-to-b from-white ${category.color}`}
                        >
                            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm border border-slate-100">
                                {category.icon}
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 mb-6">{category.title}</h3>
                            <div className="flex flex-wrap gap-2.5">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className={`px-4 py-2 ${category.badgeBg} text-slate-700 rounded-xl text-sm font-bold border transition-all duration-300 ${category.badgeHover} cursor-default`}
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

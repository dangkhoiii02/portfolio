"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { ArrowUpRight } from "lucide-react";

const projects = [
    {
        title: "Zalo Clone",
        description: "Real-time messaging application simulating Zalo, featuring complete chat, calling, and profile management capabilities.",
        learned: "Socket.io / WebRTC for real-time comms, Microservices architecture, complex state management, and smooth chat UI design.",
        github: "https://github.com/dangkhoiii02/Zalo_Clone",
        tags: ["React", "Node.js", "Socket.io"],
        image: null,
        gradient: "from-blue-500 to-cyan-400"
    },
    {
        title: "Liveness Detection",
        description: "A biometric liveness detection system guarding against facial spoofing and presentation attacks.",
        learned: "Building Deep Learning models (MobileNet, ResNet), Data Preprocessing, and OpenCV integration for fast inference.",
        github: "https://github.com/dangkhoiii02/LivenessDetection",
        tags: ["AI", "Computer Vision", "Biometrics"],
        image: null,
        gradient: "from-indigo-500 to-purple-500"
    },
    {
        title: "Grapfity",
        description: "Collaborative team project focused on professional software development lifecycle and workflows.",
        learned: "Agile/Scrum methodologies, consistent UI/UX design systems, and foundational CI/CD pipelines.",
        github: "https://github.com/ntkhai268/grapfity",
        tags: ["Teamwork", "Software Engineering"],
        image: "/assets/grapfity.png",
        gradient: ""
    },
    {
        title: "VBPL Data Extractor",
        description: "Vietnamese legal document entity extraction tool converting unstructured Word files into JSON using local LLMs.",
        learned: "Custom Prompt Engineering for Qwen, inference optimization using Apple Metal, parsing unstructured legal data.",
        github: "https://huggingface.co/dangkhoi0202/qwen2.5-3b-legal-json-adapter",
        tags: ["Python", "Local LLMs", "Apple Silicon", "Data Extraction"],
        image: null,
        gradient: "from-emerald-500 to-teal-400"
    },
    {
        title: "Real-time Noise Suppression",
        description: "AI-based real-time audio noise suppression application in C++, optimized to run directly on an ESP32-S3 microcontroller.",
        learned: "Digital Signal Processing (DSP), TinyML model quantization, and embedded C/C++ programming.",
        github: "https://github.com/dangkhoiii02/masking_denoiser",
        tags: ["C++", "ESP32-S3", "Audio Processing"],
        image: "/assets/noise-suppression.png",
        gradient: ""
    },
    {
        title: "Course Registration System",
        description: "Complex PostgreSQL database schema design modeling university course enrollment and management use cases.",
        learned: "Normalized RDBMS schema design (ERD), advanced SQL query optimization, and educational system analysis.",
        github: "https://github.com/dangkhoiii02/CourseRegistrationSystem_KTVTKPM",
        tags: ["PostgreSQL", "System Analysis", "Database Design"],
        image: "/assets/registration-system.png",
        gradient: ""
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-32 bg-slate-950 relative">
            <div className="absolute right-0 top-1/4 w-96 h-96 bg-blue-900/20 rounded-full blur-[150px] -z-10"></div>
            <div className="absolute left-0 bottom-1/4 w-96 h-96 bg-cyan-900/20 rounded-full blur-[150px] -z-10"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-24"
                >
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tighter">Featured Projects</h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.7, delay: index * 0.1 }}
                            className="group flex flex-col cursor-pointer"
                        >
                            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-[32px] overflow-hidden bg-slate-900 mb-8 border border-slate-800 group-hover:border-slate-700 shadow-lg group-hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all duration-700">
                                {project.image ? (
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
                                    />
                                ) : (
                                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} group-hover:scale-105 transition-transform duration-700 ease-out flex items-center justify-center opacity-80 group-hover:opacity-100`}>
                                        <span className="text-slate-950 font-black text-7xl opacity-50 tracking-tighter">
                                            {project.title.substring(0, 2).toUpperCase()}
                                        </span>
                                    </div>
                                )}

                                <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6 backdrop-blur-sm z-20">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="w-16 h-16 rounded-full bg-slate-800 text-cyan-400 flex items-center justify-center hover:scale-110 hover:bg-slate-700 hover:text-white transition-all shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                                        <FaGithub size={28} />
                                    </a>
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="w-16 h-16 rounded-full bg-cyan-600 text-white flex items-center justify-center hover:scale-110 hover:bg-cyan-500 transition-all shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                                        <ArrowUpRight size={28} />
                                    </a>
                                </div>
                            </div>

                            <div className="px-2">
                                <h3 className="text-3xl font-bold tracking-tight text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                                    {project.title}
                                </h3>
                                <p className="text-slate-400 font-medium leading-relaxed mb-6 text-lg">
                                    {project.description}
                                </p>

                                <div className="p-5 bg-slate-900 rounded-2xl border border-slate-800 mb-6 relative overflow-hidden group-hover:border-cyan-900/50 transition-colors">
                                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-cyan-500 to-blue-600"></div>
                                    <p className="text-[15px] text-slate-300 leading-relaxed">
                                        <span className="text-cyan-400 font-extrabold mr-2 uppercase tracking-wider text-xs">Knowledge / Tech Applied:</span>
                                        <br />
                                        <span className="font-medium">{project.learned}</span>
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="px-5 py-2 bg-slate-900 text-slate-300 rounded-xl text-sm font-bold border border-slate-800 group-hover:border-slate-700 transition-colors">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

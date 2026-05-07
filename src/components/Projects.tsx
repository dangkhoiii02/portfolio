"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { ArrowUpRight } from "lucide-react";

const projects = [
    {
        title: "Kiro Chat",
        description: "Full-stack real-time chat platform supporting one-to-one/group messaging, file sharing, online presence, and voice/video calls.",
        learned: "Implemented Spring Boot backend, Angular web, Android app, Keycloak auth, RabbitMQ message broker, MinIO storage, LiveKit video calls, and Docker.",
        github: "https://github.com/dangkhoiii02/Kiro-Chat---Real-time-Messaging-App.git",
        tags: ["Spring Boot", "Angular", "Android", "RabbitMQ", "LiveKit"],
        image: null,
        gradient: "from-emerald-600 to-teal-500"
    },
    {
        title: "Zalo Clone (Spring Boot)",
        description: "Enterprise-grade real-time messaging platform inspired by Zalo, focusing on performance and scalability.",
        learned: "Applied Java Spring Boot, Microservices architecture, WebSocket for real-time chatting, and database transactions.",
        github: "https://github.com/dangkhoiii02/Zalo_Clone_SpringBoot",
        tags: ["Java", "Spring Boot", "Microservices", "WebSocket"],
        image: null,
        gradient: "from-blue-600 to-cyan-500"
    },
    {
        title: "Liveness Detection",
        description: "A biometric liveness detection IoT pipeline safeguarding against facial spoofing and presentation attacks.",
        learned: "Integrated IoT camera modules, Python-based Vision Transformer (ViT) models, and real-time processing algorithms.",
        github: "https://github.com/dangkhoiii02/LivenessDetection",
        tags: ["Python", "ViT", "Computer Vision", "IoT"],
        image: null,
        gradient: "from-indigo-600 to-purple-500"
    },
    {
        title: "Grapfity",
        description: "Full-stack web application with complete frontend and backend business logic separation.",
        learned: "Utilized Vite, Express.js REST APIs, Microsoft SQL Server (MSSQL), and Docker containerization.",
        github: "https://github.com/ntkhai268/grapfity",
        tags: ["React", "Express.js", "MSSQL", "Docker"],
        image: "/assets/grapfity.png",
        gradient: ""
    },
    {
        title: "AstroParty",
        description: "Interactive Python-based desktop application focusing on advanced user interaction flows.",
        learned: "Applied modular OOP principles, customized game logic routing, and application state debugging.",
        github: "https://github.com/ntkhai268/AstroParty",
        tags: ["Python", "OOP", "Game Logic"],
        image: null,
        gradient: "from-yellow-500 to-orange-500"
    },
    {
        title: "Real-time Noise Suppression",
        description: "Edge AI application running audio noise suppression directly on a constrained ESP32-S3 microcontroller.",
        learned: "Digital Signal Processing (DSP), TinyML model deployment, and embedded C/C++ bare-metal programming.",
        github: "https://github.com/dangkhoiii02/masking_denoiser",
        tags: ["C++", "ESP32-S3", "Audio Processing"],
        image: "/assets/noise-suppression.png",
        gradient: ""
    },
    {
        title: "Course Registration System",
        description: "Robust database system handling complex academic enrollment workflows and concurrency.",
        learned: "Relational database schema design (ERD), PostgreSQL query optimization, and transaction handling.",
        github: "https://github.com/dangkhoiii02/CourseRegistrationSystem_KTVTKPM",
        tags: ["PostgreSQL", "Database Design", "Concurrency"],
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
                                        <span className="text-slate-950 font-black text-6xl opacity-50 tracking-tighter text-center px-4">
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

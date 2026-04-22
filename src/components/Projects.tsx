"use client";
import { motion } from "framer-motion";
import { AppWindow, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

const projects = [
    {
        title: "Liveness Detection",
        description: "Hệ thống nhận diện thực thể sống giúp ngăn chặn các hình thức giả mạo khuôn mặt trong xác thực sinh trắc học.",
        github: "https://github.com/dangkhoiii02/LivenessDetection",
        tags: ["AI", "Computer Vision", "Biometrics"],
        image: null,
    },
    {
        title: "Grapfity",
        description: "Dự án làm việc nhóm với quy trình phát triển phần mềm chuyên nghiệp.",
        github: "https://github.com/ntkhai268/grapfity",
        tags: ["Teamwork", "Software Engineering"],
        image: "/assets/grapfity.png",
    },
    {
        title: "VBPL Data Extractor",
        description: "Công cụ trích xuất thực thể văn bản pháp luật Việt Nam từ Word sang JSON. Tối ưu chạy local LLMs trên phần cứng Apple Silicon.",
        github: "https://huggingface.co/dangkhoi0202/qwen2.5-3b-legal-json-adapter",
        tags: ["Python", "Local LLMs", "Apple Silicon", "Data Extraction"],
        image: null,
    },
    {
        title: "Real-time Noise Suppression",
        description: "Ứng dụng C++ khử nhiễu âm thanh thời gian thực dựa trên AI, được tối ưu hóa chạy trực tiếp trên vi điều khiển ESP32-S3.",
        github: "https://github.com/dangkhoiii02/masking_denoiser",
        tags: ["C++", "ESP32-S3", "Audio Processing"],
        image: "/assets/noise-suppression.png",
    },
    {
        title: "Hệ thống Đăng ký Học phần",
        description: "Thiết kế Database PostgreSQL phức tạp và xây dựng quy trình Use Case đầy đủ cho nghiệp vụ đăng ký tín chỉ trường đại học.",
        github: "https://github.com/dangkhoiii02/CourseRegistrationSystem_KTVTKPM",
        tags: ["PostgreSQL", "System Analysis", "Database Design"],
        image: "/assets/registration-system.png",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-32 bg-white relative">
            <div className="absolute right-0 top-1/4 w-96 h-96 bg-blue-50 rounded-full blur-[120px] -z-10 opacity-70"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Dự Án Nổi Bật</h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-white group border border-slate-200 rounded-[2rem] p-6 sm:p-8 hover:shadow-2xl hover:shadow-blue-500/15 transition-all duration-500 flex flex-col h-full relative overflow-hidden hover:-translate-y-2"
                        >
                            <div className="absolute top-0 left-0 right-0 h-2 bg-slate-100 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-indigo-500 transition-all duration-500 z-20"></div>

                            {project.image && (
                                <div className="w-full h-52 mb-6 rounded-2xl overflow-hidden relative border border-slate-100 bg-slate-50 mt-2">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            )}

                            {!project.image && (
                                <div className="w-16 h-16 bg-slate-50 group-hover:bg-blue-50 rounded-2xl flex items-center justify-center transition-colors duration-300 mb-6 mt-2">
                                    <AppWindow className="w-8 h-8 text-slate-400 group-hover:text-blue-600 transition-colors duration-300" />
                                </div>
                            )}

                            <div className="flex justify-between items-start mb-4 gap-4">
                                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300 tracking-tight">{project.title}</h3>
                                <div className="flex gap-2 shrink-0">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 transition-all p-2 bg-slate-50 rounded-xl hover:bg-slate-100 hover:scale-110">
                                        <FaGithub size={18} />
                                    </a>
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-600 transition-all p-2 bg-slate-50 rounded-xl hover:bg-blue-50 hover:scale-110">
                                        <ArrowUpRight size={18} />
                                    </a>
                                </div>
                            </div>

                            <p className="text-slate-500 mb-8 flex-grow leading-relaxed font-medium text-lg">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="px-3 py-1.5 bg-slate-50 text-slate-600 rounded-lg text-sm font-bold border border-slate-100 group-hover:border-blue-100 transition-colors">
                                        {tag}
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

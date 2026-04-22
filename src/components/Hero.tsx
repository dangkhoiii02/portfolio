"use client";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center pt-20 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-slate-50">
            {/* Dynamic Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            {/* Decorative animated glowing blobs */}
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-400/30 rounded-full blur-[100px] -z-10"
            />
            <motion.div
                animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-indigo-400/20 rounded-full blur-[120px] -z-10"
            />

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-8">
                        <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
                        <span className="text-sm font-bold text-slate-700 tracking-wide uppercase">Sẵn sàng cho cơ hội mới</span>
                    </div>
                    <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight mb-6 text-slate-900 drop-shadow-sm">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">Phạm Đăng Khôi</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-700 mb-8 max-w-3xl mx-auto font-medium leading-relaxed">
                        Sinh viên Khoa học Máy tính | Đam mê <span className="text-blue-600 font-bold">Web Development</span> & <span className="text-indigo-600 font-bold">Artificial Intelligence</span>
                    </p>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-lg text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed border-l-4 border-blue-500 pl-6 text-left italic bg-white/60 p-6 rounded-r-2xl backdrop-blur-md shadow-sm"
                >
                    "Tập trung vào Agentic Coding, xây dựng các ứng dụng tích hợp AI và phát triển phần mềm đa nền tảng."
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                    <a
                        href="#projects"
                        className="group relative w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-slate-900 rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-slate-900/30"
                    >
                        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                        <span className="relative flex items-center">
                            Xem Dự Án
                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </a>
                    <a
                        href="#contact"
                        className="group w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-700 bg-white border-2 border-slate-200 rounded-full hover:border-blue-600 hover:text-blue-600 transition-all hover:scale-105 hover:shadow-lg"
                    >
                        <span className="relative flex items-center">
                            Tải CV / Liên Hệ
                            <Download className="ml-2 h-5 w-5 group-hover:-translate-y-1 transition-transform" />
                        </span>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}

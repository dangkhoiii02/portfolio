"use client";
import { motion } from "framer-motion";
import { Brain, Code, Puzzle, Cpu } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="py-32 bg-white relative overflow-hidden">
            <div className="absolute left-0 top-1/2 w-96 h-96 bg-slate-100 rounded-full blur-[100px] -z-10 opacity-70"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Giới Thiệu Bản Thân</h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7 }}
                        className="space-y-8 text-lg text-slate-600"
                    >
                        <p className="leading-loose text-xl font-medium text-slate-700">
                            Tôi là một lập trình viên yêu thích việc giải quyết các bài toán phức tạp từ <span className="text-blue-700 bg-blue-50 px-2 py-1 rounded-md font-bold">logic backend</span>,
                            <span className="text-indigo-700 bg-indigo-50 px-2 py-1 rounded-md mx-1 font-bold">tích hợp AI</span> cho đến thiết kế UI/UX thân thiện.
                            Tôi luôn tìm tòi các công nghệ mới nhất để tối ưu hóa quy trình làm việc.
                        </p>
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-3xl p-8 relative overflow-hidden shadow-lg shadow-blue-100/50"
                        >
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
                                className="absolute -right-8 -bottom-8 opacity-20 text-blue-500"
                            >
                                <Puzzle size={160} />
                            </motion.div>
                            <h3 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-3">
                                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm"><Puzzle size={24} /></div>
                                Điểm nhấn cá nhân
                            </h3>
                            <p className="text-blue-800/90 relative z-10 font-semibold text-lg leading-relaxed">
                                Có tư duy logic tốt và sự kiên nhẫn cao. Điều này thể hiện qua niềm đam mê ngồi hàng giờ
                                liền để lắp ráp các bộ LEGO phức tạp, cũng như kiên trì debbugger những dòng code khó nhằn.
                            </p>
                        </motion.div>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-transparent blur-3xl -z-10 rounded-full opacity-50"></div>
                        {[
                            { icon: Brain, title: "AI Integration", desc: "Ứng dụng LLMs & Machine Learning", color: "text-purple-600", bg: "bg-purple-100" },
                            { icon: Code, title: "Clean Code", desc: "Viết logic sáng sủa, dễ bảo trì", color: "text-blue-600", bg: "bg-blue-100" },
                            { icon: Cpu, title: "System Design", desc: "Kiến trúc hệ thống tối ưu", color: "text-emerald-600", bg: "bg-emerald-100" },
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: idx * 0.15 }}
                                whileHover={{ y: -8, scale: 1.02 }}
                                className={`bg-white border border-slate-100 p-8 rounded-3xl shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 ${idx === 2 ? "sm:col-span-2 sm:w-[calc(50%-12px)] justify-self-center" : ""}`}
                            >
                                <div className={`w-14 h-14 ${item.bg} rounded-2xl flex items-center justify-center ${item.color} mb-6 shadow-inner`}>
                                    <item.icon size={28} />
                                </div>
                                <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
                                <p className="text-slate-500 font-medium">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

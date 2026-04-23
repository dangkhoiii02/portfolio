"use client";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <footer id="contact" className="bg-slate-950 py-20 border-t border-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-4xl font-extrabold text-white mb-6">Let's Connect</h2>
                        <p className="text-slate-400 mb-10 text-lg font-medium leading-relaxed">
                            I'm constantly looking for opportunities to level up in <span className="text-cyan-400 font-bold">Backend Engineering</span> & <span className="text-indigo-400 font-bold">IoT Integrations</span>. Let's discuss open positions or collaboration ideas!
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                            <a href="mailto:khoidp22@gmail.com" className="flex items-center gap-4 text-slate-300 hover:text-cyan-400 transition-colors bg-slate-900 border border-slate-800 p-4 rounded-3xl group">
                                <div className="bg-slate-950 p-4 rounded-2xl group-hover:bg-cyan-950 transition-colors shrink-0">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div className="flex flex-col truncate">
                                    <span className="font-bold">Email</span>
                                    <span className="text-sm text-slate-500 truncate group-hover:text-cyan-500">khoidp22@gmail.com</span>
                                </div>
                            </a>

                            <a href="tel:0386225131" className="flex items-center gap-4 text-slate-300 hover:text-cyan-400 transition-colors bg-slate-900 border border-slate-800 p-4 rounded-3xl group">
                                <div className="bg-slate-950 p-4 rounded-2xl group-hover:bg-cyan-950 transition-colors shrink-0">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div className="flex flex-col truncate">
                                    <span className="font-bold">Phone</span>
                                    <span className="text-sm text-slate-500 truncate group-hover:text-cyan-500">0386225131</span>
                                </div>
                            </a>
                        </div>

                        <div className="flex items-center gap-4 text-slate-300 bg-slate-900 border border-slate-800 p-4 rounded-3xl mb-8">
                            <div className="bg-slate-950 p-4 rounded-2xl shrink-0">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold">Location</span>
                                <span className="text-sm text-slate-500">337/13 Thach Lam, Phu Thanh, Tan Phu, HCMC</span>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <a href="https://github.com/dangkhoiii02" target="_blank" rel="noopener noreferrer" className="p-4 bg-slate-900 border border-slate-800 text-slate-400 hover:text-white rounded-2xl transition-all hover:bg-slate-800 hover:border-cyan-500 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                                <FaGithub size={28} />
                            </a>
                            <a href="#" className="p-4 bg-slate-900 border border-slate-800 text-slate-400 hover:text-white rounded-2xl transition-all hover:bg-slate-800 hover:border-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                                <FaLinkedin size={28} />
                            </a>
                            <a href="#" className="p-4 bg-slate-900 border border-slate-800 text-2xl hover:text-white rounded-2xl transition-all hover:bg-slate-800 flex items-center justify-center w-[62px] h-[62px] grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:border-yellow-500 hover:shadow-[0_0_15px_rgba(234,179,8,0.3)]">
                                🤗
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-slate-900 p-8 rounded-[40px] border border-slate-800 shadow-xl relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-[60px]"></div>
                        <form className="space-y-6 relative z-10">
                            <div>
                                <label className="block text-sm font-bold text-slate-400 mb-2">Name</label>
                                <input
                                    type="text"
                                    className="w-full px-5 py-4 bg-slate-950 border border-slate-800 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all text-white font-medium"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-400 mb-2">Email</label>
                                <input
                                    type="email"
                                    className="w-full px-5 py-4 bg-slate-950 border border-slate-800 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all text-white font-medium"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-400 mb-2">Message</label>
                                <textarea
                                    rows={4}
                                    className="w-full px-5 py-4 bg-slate-950 border border-slate-800 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all resize-none text-white font-medium"
                                    placeholder="Hello!"
                                ></textarea>
                            </div>
                            <button
                                type="button"
                                className="w-full py-4 px-6 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-xl transition-all text-lg shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]"
                            >
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>

                <div className="mt-20 pt-8 border-t border-slate-900 text-center text-slate-600 font-medium tracking-wide text-sm flex justify-center">
                    <p>© {new Date().getFullYear()} DangKhoii.Dev. Built with Next.js, Tailwind CSS & AI Magic.</p>
                </div>
            </div>
        </footer>
    );
}

"use client";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <footer id="contact" className="bg-slate-950 py-20 border-t border-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-4xl font-extrabold text-white mb-6">Let's Connect</h2>
                        <p className="text-slate-400 mb-8 text-lg font-medium leading-relaxed">
                            I'm constantly looking for opportunities to level up in Web Engineering & AI integrations. Let's discuss open positions or collaboration ideas!
                        </p>
                        <div className="space-y-4">
                            <a href="mailto:khoihamhoc@gmail.com" className="flex items-center gap-4 text-slate-300 hover:text-cyan-400 transition-colors bg-slate-900 border border-slate-800 p-4 rounded-2xl group w-fit pr-8">
                                <div className="bg-slate-950 p-3 rounded-xl group-hover:bg-cyan-950 transition-colors">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <span className="font-bold">Email me</span>
                            </a>
                            <div className="flex gap-4 pt-4">
                                <a href="#" className="p-4 bg-slate-900 border border-slate-800 text-slate-400 hover:text-white rounded-2xl transition-all hover:bg-slate-800 hover:border-cyan-500 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                                    <FaGithub size={28} />
                                </a>
                                <a href="#" className="p-4 bg-slate-900 border border-slate-800 text-slate-400 hover:text-white rounded-2xl transition-all hover:bg-slate-800 hover:border-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                                    <FaLinkedin size={28} />
                                </a>
                                {/* Hugging Face Icon mapped as an emoji */}
                                <a href="#" className="p-4 bg-slate-900 border border-slate-800 text-2xl hover:text-white rounded-2xl transition-all hover:bg-slate-800 flex items-center justify-center w-[62px] h-[62px] grayscale opacity-80 hover:grayscale-0 hover:opacity-100 hover:border-yellow-500 hover:shadow-[0_0_15px_rgba(234,179,8,0.3)]">
                                    🤗
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-slate-900 p-8 rounded-[32px] border border-slate-800 shadow-xl relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-[50px]"></div>
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

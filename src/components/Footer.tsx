"use client";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <footer id="contact" className="bg-slate-900 text-white pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
                    <div>
                        <h2 className="text-4xl font-bold mb-6 tracking-tight">Let's Connect!</h2>
                        <p className="text-slate-400 mb-10 max-w-md leading-relaxed text-lg">
                            Nếu bạn đang tìm kiếm một lập trình viên với sự kiên nhẫn, đam mê công nghệ và khả năng tư duy hệ thống, hãy liên hệ với tôi!
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://github.com/dangkhoiii02" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center hover:bg-blue-600 hover:-translate-y-1 transition-all shadow-lg hover:shadow-blue-600/20">
                                <FaGithub size={24} />
                            </a>
                            <a href="https://huggingface.co/dangkhoi0202" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center hover:bg-blue-600 hover:-translate-y-1 transition-all shadow-lg hover:shadow-blue-600/20">
                                <span className="font-bold text-2xl">🤗</span>
                            </a>
                            <a href="#" className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center hover:bg-blue-600 hover:-translate-y-1 transition-all shadow-lg hover:shadow-blue-600/20">
                                <FaLinkedin size={24} />
                            </a>
                            <a href="#" className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center hover:bg-blue-600 hover:-translate-y-1 transition-all shadow-lg hover:shadow-blue-600/20">
                                <Mail size={24} />
                            </a>
                        </div>
                    </div>

                    <div className="bg-slate-800/50 rounded-3xl p-8 border border-slate-700/50">
                        <h3 className="text-2xl font-bold mb-8">Gửi tin nhắn</h3>
                        <form className="space-y-5">
                            <div>
                                <input type="text" placeholder="Tên của bạn" className="w-full px-5 py-4 bg-slate-900 border border-slate-700 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-white placeholder-slate-500 font-medium" />
                            </div>
                            <div>
                                <input type="email" placeholder="Email của bạn" className="w-full px-5 py-4 bg-slate-900 border border-slate-700 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-white placeholder-slate-500 font-medium" />
                            </div>
                            <div>
                                <textarea rows={4} placeholder="Nội dung tin nhắn..." className="w-full px-5 py-4 bg-slate-900 border border-slate-700 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-white placeholder-slate-500 resize-none font-medium"></textarea>
                            </div>
                            <button type="button" className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all hover:shadow-lg hover:shadow-blue-600/20">
                                Gửi Tin Nhắn
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-slate-800/80 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm font-medium">
                    <p>© {new Date().getFullYear()} Phạm Đăng Khôi. Tự hào tạo ra với Next.js & Tailwind CSS.</p>
                </div>
            </div>
        </footer>
    );
}

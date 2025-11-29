
import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data';

const Footer = () => {
    return (
        <footer className="relative border-t border-white/5 bg-slate-950 pt-16 pb-8 overflow-hidden">
            {/* Grid Pattern & Gradient */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="md:col-span-5 space-y-6">
                        <Link to="/" className="text-2xl font-bold text-white relative group tracking-tight inline-block">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                                PritamDas._
                            </span>
                        </Link>
                        <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                            Full Stack Developer crafting digital experiences with code, creativity, and cutting-edge technology.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-900 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-all border border-slate-800 hover:border-slate-700">
                                <Github size={18} />
                            </a>
                            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-900 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-all border border-slate-800 hover:border-slate-700">
                                <Linkedin size={18} />
                            </a>
                            <a href={`mailto:${personalInfo.email} `} className="p-2 bg-slate-900 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-all border border-slate-800 hover:border-slate-700">
                                <Mail size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div className="md:col-span-3 space-y-6">
                        <h4 className="text-sm font-bold text-white tracking-wider uppercase">Stay in the Loop</h4>
                        <p className="text-slate-400 text-sm">
                            Join our newsletter for the latest insights on DevOps, AI, and Tech.
                        </p>
                        <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                            <div className="relative">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full bg-slate-900/50 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors placeholder:text-slate-600"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium rounded-lg hover:shadow-lg hover:shadow-cyan-500/20 transition-all active:scale-[0.98]"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>

                    {/* Built With */}
                    <div className="md:col-span-4 space-y-6">
                        <h4 className="text-sm font-bold text-white tracking-wider uppercase flex items-center gap-2">
                            <span className="text-cyan-500">&lt;&gt;</span> Built With
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {['React', 'Tailwind CSS', 'Three.js', 'Framer Motion', 'Vite'].map((tech) => (
                                <span key={tech} className="px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-xs text-slate-400 font-mono hover:border-cyan-500/30 hover:text-cyan-400 transition-colors cursor-default">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                    <p>© {new Date().getFullYear()} Pritam Das. All rights reserved. Made with <Heart size={12} className="inline text-red-500 fill-red-500 mx-1" /> and <span className="text-cyan-500">React</span></p>

                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:-translate-y-1 transition-all"
                    >
                        <ArrowUp size={20} />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

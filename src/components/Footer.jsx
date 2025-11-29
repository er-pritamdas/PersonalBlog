import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { personalInfo } from '../data';

const Footer = () => {
    return (
        <footer className="bg-slate-950 border-t border-slate-800 py-12">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <h3 className="text-xl font-bold text-white mb-2">{personalInfo.name}</h3>
                        <p className="text-slate-400 text-sm max-w-md">
                            Sharing insights on DevOps, Network Automation, and Full Stack Development.
                        </p>
                    </div>

                    <div className="flex space-x-6">
                        <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                            <Github size={20} />
                        </a>
                        <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                            <Linkedin size={20} />
                        </a>
                        <a href={`mailto:${personalInfo.email}`} className="text-slate-400 hover:text-white transition-colors">
                            <Mail size={20} />
                        </a>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                    <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
                    <p className="flex items-center gap-1">
                        Made with <Heart size={14} className="text-red-500 fill-red-500" /> using React & Tailwind
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

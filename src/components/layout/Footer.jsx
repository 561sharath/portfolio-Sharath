import React from 'react';
import { profileData } from '../../data/profile';
import { Github, Linkedin, Twitter, ExternalLink } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-12 px-6 bg-black border-t border-gray-900">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                <div>
                    <a href="#home" className="text-2xl font-bold text-accent tracking-tighter">
                        SHARATH<span className="text-white">.K</span>
                    </a>
                    <p className="text-gray-500 mt-2">© {new Date().getFullYear()} K N Sharath Kumar. All rights reserved.</p>
                </div>

                <div className="flex gap-6">
                    <a href={profileData.contact.socials.leetcode} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-accent transition-colors">
                        <span className="sr-only">LeetCode</span>
                        <ExternalLink size={24} />
                    </a>
                    <a href="#" className="text-gray-500 hover:text-accent transition-colors">
                        <Github size={24} />
                    </a>
                    <a href="#" className="text-gray-500 hover:text-accent transition-colors">
                        <Linkedin size={24} />
                    </a>
                    <a href="#" className="text-gray-500 hover:text-accent transition-colors">
                        <Twitter size={24} />
                    </a>
                </div>

                <div className="text-gray-500 text-sm italic">
                    Built with React, Vite & Tailwind CSS
                </div>
            </div>
        </footer>
    );
};

export default Footer;

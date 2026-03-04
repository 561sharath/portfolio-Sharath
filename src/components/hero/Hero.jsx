import React from 'react';
import { profileData } from '../../data/profile';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        I'm <span className="text-accent decoration-yellow-500/30 underline-offset-8">{profileData.name}</span>
                    </h1>
                    <h2 className="text-2xl md:text-3xl text-gray-400 mb-8 font-medium">
                        {profileData.title}
                    </h2>
                    <p className="text-gray-400 text-lg mb-10 max-w-xl leading-relaxed">
                        {profileData.summary}
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <a
                            href="#projects"
                            className="px-8 py-4 bg-accent text-black font-bold rounded hover:bg-yellow-400 transition-all flex items-center gap-2 group shadow-lg shadow-accent/20"
                        >
                            View Projects <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="/Sharath_Kumar_Frontend_Developer_2Years.pdf"
                            download="Sharath_Kumar_Resume.pdf"
                            className="px-8 py-4 border border-gray-700 text-white font-bold rounded hover:bg-gray-800 transition-all flex items-center gap-2"
                        >
                            Download Resume <Download size={20} />
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    <div className="relative z-10 w-full max-w-[500px] mx-auto overflow-hidden rounded-[2rem] border border-gray-800 bg-section/40 backdrop-blur-sm group p-4">
                        {/* Professional yellow/gold gradient background */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 via-transparent to-accent/5 opacity-50"></div>

                        <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="/sharath.jpg"
                                alt={profileData.name}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Overlay gradient for premium look */}
                            <div className="absolute inset-0 bg-gradient-to-t from-section/80 via-transparent to-transparent"></div>
                        </div>
                    </div>

                    {/* Background Glows (Yellowish light color as requested) */}
                    <div className="absolute -top-20 -right-20 w-80 h-80 bg-accent/20 blur-[120px] rounded-full animate-pulse"></div>
                    <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-yellow-500/10 blur-[100px] rounded-full"></div>

                    {/* Decorative Abstract Shapes */}
                    <div className="absolute top-1/2 -right-4 w-12 h-12 border-2 border-accent/20 rounded-full hidden md:block animate-bounce"></div>
                    <div className="absolute bottom-10 left-10 w-6 h-6 bg-accent/30 rounded-lg rotate-12 hidden md:block"></div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;

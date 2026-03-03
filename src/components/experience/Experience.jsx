import React from 'react';
import { experienceData } from '../../data/experience';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
    return (
        <section id="experience" className="py-24 px-6 bg-section overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col items-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Professional Experience</h2>
                    <div className="w-20 h-1 bg-accent"></div>
                </div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 h-full w-0.5 bg-gray-800"></div>

                    <div className="space-y-16">
                        {experienceData.map((exp, index) => (
                            <div key={index} className="relative">
                                {/* Timeline Dot */}
                                <div className="absolute left-[9px] md:left-1/2 md:-translate-x-1/2 top-4 w-4 h-4 rounded-full bg-accent border-4 border-section z-10"></div>

                                <motion.div
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                    className={`relative flex flex-col ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'}`}
                                >
                                    <div className={`w-full md:w-[45%] pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                                        <div className="p-8 bg-background rounded-3xl border border-gray-800 hover:border-accent/40 transition-all group shadow-xl">
                                            <div className="flex items-center gap-3 text-accent mb-2">
                                                <Briefcase size={18} />
                                                <span className="font-bold uppercase tracking-widest text-xs">{exp.role}</span>
                                            </div>
                                            <h3 className="text-2xl font-bold text-white mb-2">{exp.company}</h3>

                                            <div className="flex flex-wrap gap-4 text-gray-500 mb-6 text-sm font-medium">
                                                <div className="flex items-center gap-1.5">
                                                    <Calendar size={14} className="text-gray-600" />
                                                    <span>{exp.period}</span>
                                                </div>
                                            </div>

                                            <ul className="space-y-3">
                                                {exp.highlights.map((item, idx) => (
                                                    <li key={idx} className="text-gray-400 text-sm flex items-start gap-3 leading-relaxed">
                                                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent/30 flex-shrink-0"></span>
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;

import React from 'react';
import { educationData } from '../../data/education';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, School } from 'lucide-react';

const Education = () => {
    return (
        <section id="education" className="py-24 px-6 bg-background">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col items-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Education</h2>
                    <div className="w-20 h-1 bg-accent"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {educationData.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="p-8 bg-section rounded-3xl border border-gray-800 hover:border-accent/30 transition-all flex flex-col group"
                        >
                            <div className="w-14 h-14 bg-background rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-black transition-colors">
                                <GraduationCap size={28} />
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                            <div className="flex items-center gap-2 text-accent font-bold mb-4 text-sm tracking-wider">
                                <School size={16} />
                                {edu.institution}
                            </div>

                            <div className="flex items-center gap-2 text-gray-500 mb-6 text-sm italic font-medium">
                                <Calendar size={16} />
                                {edu.period}
                            </div>

                            <ul className="space-y-2 mt-auto">
                                {edu.highlights.map((item, idx) => (
                                    <li key={idx} className="text-gray-400 text-sm flex items-start gap-2">
                                        <span className="mt-1.5 w-1 h-1 rounded-full bg-accent/50 flex-shrink-0"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;

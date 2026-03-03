import React from 'react';
import { achievementsData } from '../../data/achievements';
import { motion } from 'framer-motion';
import { Code2, Brain, Award } from 'lucide-react';

const iconMap = {
    Code2: Code2,
    Brain: Brain,
    Award: Award
};

const Achievements = () => {
    return (
        <section id="achievements" className="py-24 px-6 bg-section">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col items-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Competitive & Professional Milestones</h2>
                    <div className="w-20 h-1 bg-accent"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {achievementsData.map((item, index) => {
                        const Icon = iconMap[item.icon];
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-10 bg-background border border-gray-800 rounded-3xl text-center hover:border-accent group transition-all"
                            >
                                <div className="w-20 h-20 bg-section rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-accent group-hover:text-black transition-all">
                                    <Icon size={40} />
                                </div>
                                <h3 className="text-5xl font-black text-white mb-2 tracking-tighter">
                                    {item.score}
                                </h3>
                                <p className="text-accent font-bold uppercase tracking-widest text-sm mb-4">
                                    {item.platform}
                                </p>
                                <p className="text-gray-500 font-medium">
                                    {item.detail}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Achievements;

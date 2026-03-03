import React from 'react';
import { skillsData } from '../../data/skills';
import { motion } from 'framer-motion';

const Skills = () => {
    return (
        <section id="skills" className="py-24 px-6 bg-background">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Technical Expertise</h2>
                    <div className="w-20 h-1 bg-accent mx-auto"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillsData.map((category, catIndex) => (
                        <motion.div
                            key={catIndex}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: catIndex * 0.1 }}
                            className="p-8 bg-section rounded-2xl border border-gray-800 hover:border-accent/40 transition-all flex flex-col"
                        >
                            <h3 className="text-xl font-bold text-accent mb-6 uppercase tracking-widest text-sm">
                                {category.category}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill, skillIndex) => (
                                    <span
                                        key={skillIndex}
                                        className="px-4 py-2 bg-background border border-gray-800 rounded-lg text-gray-300 text-sm hover:bg-black hover:text-accent hover:border-accent/30 transition-all cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;

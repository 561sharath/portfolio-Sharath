import React from 'react';
import { profileData } from '../../data/profile';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-24 bg-section px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl font-bold mb-8 flex items-center gap-4">
                            <span className="w-12 h-1 bg-accent"></span>
                            About Me
                        </h2>
                        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                            {profileData.about.description}
                        </p>
                        <div className="space-y-4">
                            {profileData.about.highlights.map((highlight, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <CheckCircle2 className="text-accent mt-1 flex-shrink-0" size={20} />
                                    <span className="text-gray-400">{highlight}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="grid grid-cols-2 gap-6"
                    >
                        <div className="p-8 bg-background border border-gray-800 rounded-2xl hover:border-accent/50 transition-all hover:bg-black group">
                            <h3 className="text-4xl font-bold text-accent mb-2 group-hover:scale-110 transition-transform origin-left">2+</h3>
                            <p className="text-gray-400 font-medium">Years Experience</p>
                        </div>
                        <div className="p-8 bg-background border border-gray-800 rounded-2xl hover:border-accent/50 transition-all hover:bg-black group">
                            <h3 className="text-4xl font-bold text-accent mb-2 group-hover:scale-110 transition-transform origin-left">15+</h3>
                            <p className="text-gray-400 font-medium">Modules Developed</p>
                        </div>
                        <div className="p-8 bg-background border border-gray-800 rounded-2xl hover:border-accent/50 transition-all hover:bg-black group">
                            <h3 className="text-4xl font-bold text-accent mb-2 group-hover:scale-110 transition-transform origin-left">40%</h3>
                            <p className="text-gray-400 font-medium">Build Performance Improved</p>
                        </div>
                        <div className="p-8 bg-background border border-gray-800 rounded-2xl hover:border-accent/50 transition-all hover:bg-black group">
                            <h3 className="text-4xl font-bold text-accent mb-2 group-hover:scale-110 transition-transform origin-left">10+</h3>
                            <p className="text-gray-400 font-medium">Reusable Components Built</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;

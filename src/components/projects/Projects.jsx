import React from 'react';
import { projectsData } from '../../data/projects';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code } from 'lucide-react';

const Projects = () => {
    return (
        <section id="projects" className="py-24 px-6 bg-background">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Featured Work</h2>
                    <div className="w-20 h-1 bg-accent mx-auto"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                    {projectsData.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-section rounded-3xl overflow-hidden border border-gray-800 hover:border-accent/40 transition-all group flex flex-col"
                        >
                            <div className="h-64 overflow-hidden relative">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-60 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-section via-transparent to-transparent"></div>
                                <div className="absolute top-4 right-4 flex gap-2">
                                    <button className="p-2 bg-black/50 backdrop-blur-md rounded-full text-white hover:text-accent border border-white/10">
                                        <Github size={20} />
                                    </button>
                                    <button className="p-2 bg-black/50 backdrop-blur-md rounded-full text-white hover:text-accent border border-white/10">
                                        <ExternalLink size={20} />
                                    </button>
                                </div>
                            </div>

                            <div className="p-8 flex flex-col flex-1">
                                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 mb-6 flex-1 italic">
                                    {project.description}
                                </p>

                                <div className="mb-6">
                                    <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-3 flex items-center gap-2">
                                        <Code size={14} /> Key Features
                                    </h4>
                                    <ul className="grid grid-cols-1 gap-2">
                                        {project.features.map((feature, idx) => (
                                            <li key={idx} className="text-sm text-gray-300 flex items-center gap-2">
                                                <span className="w-1 h-1 bg-accent rounded-full"></span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-gray-800">
                                    {project.techStack.map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 bg-background border border-gray-800 text-gray-500 rounded-full"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

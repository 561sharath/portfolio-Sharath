import React, { useState } from 'react';
import { profileData } from '../../data/profile';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const subject = `Portfolio Contact from ${formData.name}`;
        const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
        window.location.href = `mailto:${profileData.contact.email}?subject=${encodeURIComponent(subject)}&body=${body}`;
    };

    return (
        <section id="contact" className="py-24 px-6 bg-background">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold mb-8">Let's Connect</h2>
                        <p className="text-gray-400 text-lg mb-12 leading-relaxed">
                            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                            Let's create something amazing together!
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-center gap-6">
                                <div className="w-14 h-14 bg-section rounded-2xl flex items-center justify-center text-accent">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="text-gray-500 text-sm uppercase font-bold tracking-widest">Email Me</p>
                                    <a href={`mailto:${profileData.contact.email}`} className="text-xl font-bold text-white hover:text-accent transition-colors">
                                        {profileData.contact.email}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-6">
                                <div className="w-14 h-14 bg-section rounded-2xl flex items-center justify-center text-accent">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <p className="text-gray-500 text-sm uppercase font-bold tracking-widest">Call Me</p>
                                    <a href={`tel:${profileData.contact.phone}`} className="text-xl font-bold text-white hover:text-accent transition-colors">
                                        +91 {profileData.contact.phone}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-6">
                                <div className="w-14 h-14 bg-section rounded-2xl flex items-center justify-center text-accent">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <p className="text-gray-500 text-sm uppercase font-bold tracking-widest">Location</p>
                                    <p className="text-xl font-bold text-white">
                                        {profileData.contact.location}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-10 bg-section rounded-3xl border border-gray-800"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-500 uppercase">Your Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="John Doe"
                                    className="w-full px-6 py-4 bg-background border border-gray-800 rounded-xl focus:outline-none focus:border-accent transition-all text-white"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-500 uppercase">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="john@example.com"
                                    className="w-full px-6 py-4 bg-background border border-gray-800 rounded-xl focus:outline-none focus:border-accent transition-all text-white"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-500 uppercase">Message</label>
                                <textarea
                                    rows="5"
                                    name="message"
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell me about your project..."
                                    className="w-full px-6 py-4 bg-background border border-gray-800 rounded-xl focus:outline-none focus:border-accent transition-all text-white resize-none"
                                ></textarea>
                            </div>
                            <button type="submit" className="w-full py-4 bg-accent text-black font-bold rounded-xl hover:bg-yellow-400 transition-all flex items-center justify-center gap-2 group">
                                Send Message <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

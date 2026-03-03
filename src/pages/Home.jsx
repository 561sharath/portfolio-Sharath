import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/hero/Hero';
import About from '../components/about/About';
import Skills from '../components/skills/Skills';
import Experience from '../components/experience/Experience';
import Education from '../components/experience/Education';
import Projects from '../components/projects/Projects';
import Achievements from '../components/achievements/Achievements';
import Contact from '../components/contact/Contact';

const Home = () => {
    return (
        <div className="bg-background min-h-screen text-white selection:bg-accent selection:text-black">
            <Navbar />
            <main>
                <Hero />
                <About />
                <Skills />
                <Experience />
                <Education />
                <Projects />
                <Achievements />
                <Contact />
            </main>
            <Footer />
        </div>
    );
};

export default Home;

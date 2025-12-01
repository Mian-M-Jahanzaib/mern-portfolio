import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navItems = [
        { name: 'Home', activeClass: 'text-primary decoration-primary' }, 
        { name: 'Skills', activeClass: 'text-yellow-600 decoration-yellow-600' },
        { name: 'Experience', activeClass: 'text-rose-700 decoration-rose-700' },
        { name: 'Projects', activeClass: 'text-green-700 decoration-green-700' },
        { name: 'Contact', activeClass: 'text-purple-700 decoration-purple-700' },
    ];

    // Scroll Spy Logic
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            navItems.forEach((item) => {
                const section = document.getElementById(item.name.toLowerCase());
                if (section) {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;
                    if (scrollPosition >= (sectionTop - 150) && scrollPosition < (sectionTop + sectionHeight - 150)) {
                        setActiveSection(item.name.toLowerCase());
                    }
                }
            });
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Helper to handle smooth scroll on mobile
    const handleMobileNavClick = () => {
        setMobileMenuOpen(false); // 1. Close menu first
    };

  return (
    <>
        <nav className="sticky top-0 z-50 bg-white border-b-4 border-slate-800 w-full">
            <div className="max-w-[1150px] mx-auto flex items-center justify-between p-4 px-6">
                
                {/* Logo */}
                <div className="bg-yellow-300 border-2 border-slate-800 px-3 py-1 -rotate-2 hover:rotate-0 transition-transform cursor-pointer shadow-[2px_2px_0px_0px_rgba(30,41,59,1)] z-50">
                    <a href="#home" className="text-slate-900 text-xl font-black uppercase tracking-tighter block">
                        M_M_Jahanzaib
                    </a>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex gap-8 items-center">
                    {navItems.map((item) => {
                        const isActive = activeSection === item.name.toLowerCase();
                        return (
                            <a 
                                key={item.name}
                                href={`#${item.name.toLowerCase()}`}
                                className={`
                                    font-bold text-sm uppercase tracking-wide underline decoration-4 underline-offset-4 transition-all
                                    ${isActive ? item.activeClass : 'text-slate-900 decoration-transparent hover:decoration-slate-400'}
                                `}
                            >
                                {item.name}
                            </a>
                        );
                    })}
                </div>

                {/* Mobile Hamburger Button */}
                <button 
                    onClick={() => setMobileMenuOpen(true)}
                    className="md:hidden bg-purple-200 border-2 border-slate-800 p-2 rounded hover:bg-purple-300 transition-colors active:scale-95"
                >
                    <span className="material-symbols-outlined font-bold text-slate-900 block">menu</span>
                </button>
            </div>
        </nav>

        {/* ================= MOBILE SIDE DRAWER ================= */}
        <AnimatePresence>
            {mobileMenuOpen && (
                <>
                    {/* 1. Backdrop Overlay (Darkens the rest of the screen) */}
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setMobileMenuOpen(false)} // Close if clicking outside
                        className="fixed inset-0 bg-black/50 z-[60] backdrop-blur-sm"
                    />

                    {/* 2. The Side Drawer (Pops in from Right) */}
                    <motion.div 
                        initial={{ x: "100%" }} // Start off-screen right
                        animate={{ x: 0 }}      // Slide to position
                        exit={{ x: "100%" }}    // Slide back out
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed top-0 right-0 h-full w-[75%] max-w-sm bg-white border-l-4 border-slate-800 z-[70] shadow-2xl flex flex-col"
                    >
                        {/* Drawer Header with Close Button */}
                        <div className="flex justify-between items-center p-6 border-b-4 border-slate-800 bg-yellow-50">
                            <h2 className="text-xl font-black uppercase text-slate-900">Menu</h2>
                            <button 
                                onClick={() => setMobileMenuOpen(false)}
                                className="bg-red-200 border-2 border-slate-800 p-1 rounded hover:bg-red-300 transition-colors"
                            >
                                <span className="material-symbols-outlined font-bold text-slate-900 block">close</span>
                            </button>
                        </div>

                        {/* Links List */}
                        <div className="flex flex-col p-6 gap-4 overflow-y-auto">
                            {navItems.map((item) => {
                                const isActive = activeSection === item.name.toLowerCase();
                                return (
                                    <a 
                                        key={item.name}
                                        href={`#${item.name.toLowerCase()}`}
                                        onClick={handleMobileNavClick}
                                        className={`
                                            block w-full py-4 text-center font-black uppercase tracking-wider border-2 border-slate-800 rounded-xl shadow-[4px_4px_0px_0px_rgba(30,41,59,1)] transition-all active:translate-x-[2px] active:translate-y-[2px] active:shadow-none
                                            ${isActive 
                                                ? getActiveMobileStyle(item.name) // Use helper function for colors
                                                : 'bg-white text-slate-900 hover:bg-slate-100'
                                            }
                                        `}
                                    >
                                        {item.name}
                                    </a>
                                )
                            })}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    </>
  )
}

// Helper function to return the correct "Active" colors for the mobile buttons
function getActiveMobileStyle(name) {
    switch(name) {
        case 'Home': return 'bg-blue-500 text-white';
        case 'Skills': return 'bg-yellow-500 text-slate-900';
        case 'Experience': return 'bg-rose-500 text-white';
        case 'Projects': return 'bg-green-600 text-white';
        case 'Contact': return 'bg-purple-600 text-white';
        default: return 'bg-slate-800 text-white';
    }
}

export default Navbar
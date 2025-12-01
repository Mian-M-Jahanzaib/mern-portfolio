import React from 'react'
import { motion } from 'framer-motion'

const Experience = () => {
  const headingAnimation = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { delay: 0.3, duration: 0.8, type: "spring", stiffness: 50, damping: 10 } 
    }
  }

  return (
    <section className="pt-10 pb-10" id="experience">
        <div className="container mx-auto px-4 max-w-[1150px] bg-rose-50 border-4 border-rose-900 rounded-[20px_50px_20px_50px] p-8 md:p-12 shadow-lg">
            
            <motion.h2 
                variants={headingAnimation}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="text-rose-900 text-[28px] font-bold leading-tight tracking-[-0.015em] pb-10 text-center uppercase"
            >
                My Journey
            </motion.h2>

            <div className="relative border-l-4 border-rose-900 ml-3 md:ml-6 space-y-8">
                
                {/* Job 1 (Current) */}
                <div className="relative pl-8 md:pl-12">
                    <div className="absolute -left-[10px] top-2 h-6 w-6 rounded-full bg-rose-500 border-4 border-rose-900 ring-4 ring-rose-50"></div>
                    
                    <div className="bg-white border-2 border-rose-900 rounded-xl p-6 transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#881337]">
                        <div className="flex justify-between items-start gap-4">
                            <div>
                                <span className="text-xs font-black text-rose-600 bg-rose-100 px-2 py-1 rounded border border-rose-200 uppercase tracking-wide">
                                    2025(June) - Present
                                </span>
                                <h3 className="text-lg font-bold text-rose-900 mt-2">Full-Stack PHP Developer</h3>
                                <p className="text-sm font-bold text-rose-700 mb-2">Digisphere</p>
                                <p className="text-sm text-rose-800 font-medium leading-relaxed max-w-md">
                                    Leading development using PHP, MySql, JS, HTML and CSS.
                                </p>
                            </div>
                            {/* PHP Icon */}
                            <img 
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" 
                                alt="PHP Logo" 
                                className="w-16 h-16 object-contain border-2 border-rose-100 rounded-lg p-2 bg-rose-50" 
                            />
                        </div>
                    </div>
                </div>

                {/* Job 2 */}
                <div className="relative pl-8 md:pl-12">
                    <div className="absolute -left-[10px] top-2 h-6 w-6 rounded-full bg-white border-4 border-rose-900 ring-4 ring-rose-50"></div>
                    
                    <div className="bg-white border-2 border-rose-900 rounded-xl p-6 transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#881337]">
                        <div className="flex justify-between items-start gap-4">
                            <div>
                                <span className="text-xs font-black text-rose-900 bg-rose-100 px-2 py-1 rounded border border-rose-200 uppercase tracking-wide">
                                    2024 - 2025
                                </span>
                                <h3 className="text-lg font-bold text-rose-900 mt-2">Front-End Web Developer</h3>
                                <p className="text-sm font-bold text-rose-700 mb-2">Personal Projects</p>
                                <p className="text-sm text-rose-800 font-medium leading-relaxed max-w-md">
                                    Created responsive, clean and easy to navigate websites.
                                </p>
                            </div>
                            {/* HTML5 Icon */}
                            <img 
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" 
                                alt="HTML Logo" 
                                className="w-16 h-16 object-contain border-2 border-rose-100 rounded-lg p-2 bg-rose-50" 
                            />
                        </div>
                    </div>
                </div>
                
                 {/* Job 3 */}
                 <div className="relative pl-8 md:pl-12">
                    <div className="absolute -left-[10px] top-2 h-6 w-6 rounded-full bg-white border-4 border-rose-900 ring-4 ring-rose-50"></div>
                    
                    <div className="bg-white border-2 border-rose-900 rounded-xl p-6 transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#881337]">
                        <div className="flex justify-between items-start gap-4">
                             <div>
                                <span className="text-xs font-black text-rose-900 bg-rose-100 px-2 py-1 rounded border border-rose-200 uppercase tracking-wide">
                                    2023 - 2024
                                </span>
                                <h3 className="text-lg font-bold text-rose-900 mt-2">C++ Programmer</h3>
                                <p className="text-sm font-bold text-rose-700 mb-2">Real-World Projects</p>
                            </div>
                            {/* C++ Icon */}
                            <img 
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" 
                                alt="C++ Logo" 
                                className="w-16 h-16 object-contain border-2 border-rose-100 rounded-lg p-2 bg-rose-50" 
                            />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Experience
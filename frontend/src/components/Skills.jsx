import React from 'react'
import { motion } from 'framer-motion'

const Skills = () => {
  const headingAnimation = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { delay: 0.3, duration: 0.8, type: "spring", stiffness: 50, damping: 10 } 
    }
  }

  return (
    <section className="pt-10 pb-10" id="skills">
        <div className="container mx-auto px-4 max-w-[1150px] bg-amber-50 border-4 border-amber-900 rounded-[30px_50px_30px_50px] p-8 md:p-12 shadow-lg">
            
            <motion.h2 
                variants={headingAnimation}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="text-amber-900 text-[28px] font-bold leading-tight tracking-[-0.015em] pb-10 text-center uppercase"
            >
                My Tech Stack
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Card 1 */}
                {/* UPDATED CLASS: Removed default shadow, kept hover:shadow */}
                <div className="group bg-white border-2 border-amber-900 rounded-xl p-6 transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#78350f]">
                    <div className="w-14 h-14 bg-amber-200 border-2 border-amber-900 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined text-amber-900 text-3xl">database</span>
                    </div>
                    
                    <div className="flex flex-col gap-2">
                        <h2 className="text-amber-900 text-lg font-black uppercase">Core Backend</h2>
                        <span className="text-xs font-bold bg-amber-100 text-amber-900 px-2 py-1 rounded border border-amber-200 w-fit">Professional Level</span>
                        <p className="text-amber-800 text-sm font-medium mt-1 leading-relaxed">
                            PHP, MySQL.
                        </p>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="group bg-white border-2 border-amber-900 rounded-xl p-6 transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#78350f]">
                    <div className="w-14 h-14 bg-amber-200 border-2 border-amber-900 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined text-amber-900 text-3xl">html</span>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h2 className="text-amber-900 text-lg font-black uppercase">Frontend Core</h2>
                        <span className="text-xs font-bold bg-amber-100 text-amber-900 px-2 py-1 rounded border border-amber-200 w-fit">Expert</span>
                        <p className="text-amber-800 text-sm font-medium mt-1">
                            HTML5, CSS3, JavaScript.
                        </p>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="group bg-white border-2 border-amber-900 rounded-xl p-6 transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#78350f]">
                    <div className="w-14 h-14 bg-amber-200 border-2 border-amber-900 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined text-amber-900 text-3xl">javascript</span>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h2 className="text-amber-900 text-lg font-black uppercase">Modern Stack</h2>
                        <span className="text-xs font-bold bg-purple-100 text-purple-900 px-2 py-1 rounded border border-purple-200 w-fit">Learning MERN</span>
                        <p className="text-amber-800 text-sm font-medium mt-1">
                            MongoDB, Express, React, Node.js.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Skills
import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  const floatingVariant = (duration, delay) => ({
    y: ["-20px", "20px"],
    rotate: [0, 360],
    transition: {
      duration: duration,
      delay: delay,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut"
    }
  })

  const floatingSideways = (duration, delay) => ({
    x: ["-30px", "30px"],
    rotate: [0, -360],
    transition: {
      duration: duration,
      delay: delay,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut"
    }
  })

  return (
    <section className="relative overflow-hidden py-20 md:py-32" id="home">
        
        {/* ================= FLOATING SHAPES ================= */}
        <div className="absolute inset-0 z-0 pointer-events-none">
            <motion.div animate={floatingVariant(8, 0)} className="absolute top-[10%] left-[5%] w-16 h-16 bg-blue-200 border-2 border-blue-300 rounded-xl opacity-20 rotate-12"/>
            <motion.div animate={floatingVariant(10, 1)} className="absolute top-[40%] right-[5%] w-24 h-24 bg-purple-200 border-2 border-purple-300 rounded-full opacity-20"/>
            <motion.div animate={floatingVariant(12, 0.5)} style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} className="absolute bottom-[15%] left-[8%] w-20 h-20 bg-yellow-200 border-none opacity-20 rotate-45"/>
            <motion.div animate={floatingVariant(9, 2)} className="absolute top-[20%] right-[15%] w-12 h-12 bg-green-200 border-2 border-green-300 rounded-[30%] opacity-20 -rotate-12"/>
            <motion.div animate={floatingVariant(7, 1.5)} className="absolute top-[60%] left-[50%] w-6 h-6 bg-red-200 border-2 border-red-300 rounded-full opacity-20"/>
            <motion.div animate={floatingSideways(11, 0.2)} className="absolute top-[5%] left-[40%] w-10 h-10 bg-orange-200 border-2 border-orange-300 rounded-md opacity-20 rotate-45"/>
            <motion.div animate={floatingVariant(5, 3)} className="absolute bottom-[10%] right-[2%] w-4 h-4 bg-pink-400 border-2 border-pink-500 rounded-full opacity-30"/>
            <motion.div animate={floatingVariant(15, 0)} className="absolute top-[-5%] left-[-2%] w-32 h-32 bg-cyan-100 border-2 border-cyan-200 rounded-full opacity-10"/>
            <motion.div animate={floatingSideways(9, 1.2)} className="absolute top-[35%] left-[1%] w-8 h-16 bg-indigo-200 border-2 border-indigo-300 rounded-lg opacity-20 -rotate-12"/>
            <motion.div animate={floatingVariant(13, 2.5)} style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} className="absolute top-[55%] right-[20%] w-14 h-14 bg-teal-200 opacity-20 rotate-180"/>
            <motion.div animate={floatingSideways(8, 4)} className="absolute bottom-[5%] left-[80%] w-12 h-12 border-4 border-slate-300 rounded-lg opacity-20 rotate-12"/>
        </div>

        {/* ================= MAIN CONTENT ================= */}
        <div className="container relative z-10 mx-auto px-4 text-center max-w-[1150px]">
            
            {/* Profile Image - Increased size to w-60 h-60 */}
            <div className="relative mx-auto w-60 h-60 mb-6">
                <div className="absolute inset-0 bg-yellow-300 border-4 border-slate-800 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] rotate-6 shadow-[4px_4px_0px_0px_rgba(30,41,59,1)]"></div>
                <div className="relative w-full h-full rounded-full border-4 border-slate-800 overflow-hidden bg-gray-300 z-10 bg-cover bg-center"
                     style={{ backgroundImage: "url('/profile.jpeg')" }}>
                </div>
            </div>

            {/* Text - Decreased size to text-3xl/5xl for better balance */}
            <h1 className="text-3xl md:text-5xl font-black mb-4 text-slate-900 uppercase tracking-tight">
                I'm <span className="text-primary relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-blue-100 before:z-[-1]">Mian Muhammad Jahanzaib</span>
            </h1>
            
            <p className="text-xl md:text-2xl font-bold text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                Full-Stack PHP Developer | <span className="text-purple-600">MERN Stack Enthusiast</span>.
            </p>

            {/* Buttons */}
            <div className="flex justify-center gap-6">
                <a 
                    href="/mmj_cv.pdf" 
                    download="MMJ_CV.pdf"
                    className="bg-primary border-4 border-slate-800 text-white px-8 py-3 rounded-xl font-black uppercase tracking-wider shadow-[4px_4px_0px_0px_rgba(30,41,59,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                >
                    Download CV
                </a>

                <a 
                    href="#contact" 
                    className="bg-white border-4 border-slate-800 text-slate-900 px-8 py-3 rounded-xl font-black uppercase tracking-wider shadow-[4px_4px_0px_0px_rgba(30,41,59,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all inline-block"
                >
                    Contact Me
                </a>
            </div>

            <p className="mt-6 text-slate-500 text-sm font-medium opacity-80">
                Currently available for freelance work & open source collaborations.
            </p>
        </div>
    </section>
  )
}

export default Hero
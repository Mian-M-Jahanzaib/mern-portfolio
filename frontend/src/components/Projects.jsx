import React from 'react'
import { motion } from 'framer-motion'

const Projects = () => {
    const headingAnimation = {
        hidden: { y: -100, opacity: 0 },
        visible: { 
          y: 0, 
          opacity: 1,
          transition: { delay: 0.1, duration: 0.8, type: "spring", stiffness: 50, damping: 10 } 
        }
    }

    const projects = [
        { 
            title: "DigiSphere", 
            tech: "PHP, MySql", 
            description: "Tech blogs/articles.", 
            image: "/digi.avif",
            // PASTE YOUR LIVE LINK HERE
            link: "https://digisphere.wuaze.com" 
        },
        { 
            title: "Portfolio", 
            tech: "React", 
            description: "This website.", 
            image: "/portfolio.jpg",
            // Since this IS the portfolio, linking to #home reloads the page nicely
            link: "#home"
        },
        { 
            title: "Airline system", 
            tech: "HTML5, CSS3, JS", 
            description: "Clean and easy user interface.", 
            image: "/airline.jpg",
            // PASTE YOUR GITHUB LINK HERE
            link: "https://github.com/Mian-M-Jahanzaib/airline-system"
        },
        { 
            title: "Bank Management", 
            tech: "C++, OOP", 
            description: "Real world bank management system.", 
            image: "/bank.png",
            // PASTE YOUR GITHUB LINK HERE
            link: "https://github.com/Mian-M-Jahanzaib/MyCppProject/"
        }
    ];

  return (
    <section className="pt-10 pb-20" id="projects">
        <div className="container mx-auto px-4 max-w-[1150px] bg-green-50 border-4 border-green-900 rounded-[50px_20px_50px_20px] p-8 md:p-12 shadow-lg">
            
            <motion.h2 
                variants={headingAnimation}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="text-green-900 text-[28px] font-bold leading-tight tracking-[-0.015em] pb-10 text-center uppercase"
            >
                Featured Work
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    // CHANGED: Wrapped the card in an <a> tag
                    // target="_blank" opens it in a new tab
                    // rel="noopener noreferrer" is for security
                    <a 
                        key={index} 
                        href={project.link}
                        target={project.link.startsWith('#') ? "_self" : "_blank"} // Don't open new tab for internal links
                        rel="noopener noreferrer"
                        className="group relative bg-white border-2 border-green-900 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#14532d] block cursor-pointer"
                    >
                        
                        <div className="h-48 w-full border-b-2 border-green-900 overflow-hidden relative">
                            <img 
                                src={project.image} 
                                alt={project.title} 
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            {/* Overlay icon appears on hover */}
                            <div className="absolute inset-0 bg-green-900/0 group-hover:bg-green-900/20 transition-colors duration-300 flex items-center justify-center">
                                <span className="material-symbols-outlined text-white text-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-md">
                                    open_in_new
                                </span>
                            </div>
                        </div>
                        
                        <div className="p-6">
                            <span className="inline-block py-1 px-3 rounded-full bg-green-900 text-white text-[10px] font-bold tracking-wider mb-2">
                                {project.tech}
                            </span>
                            <h3 className="text-xl font-bold text-green-900">
                                {project.title}
                            </h3>
                            <p className="text-green-800 text-sm mt-3 font-medium">
                                {project.description}
                            </p>
                            
                            <div className="mt-4 flex items-center gap-2 text-sm font-bold text-green-900 group-hover:underline">
                                View Project 
                                <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Projects
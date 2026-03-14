import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  const headingAnimation = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { delay: 0.1, duration: 0.8, type: "spring", stiffness: 50, damping: 10 } 
    }
  }

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    setStatus("sending");

    try {
      const response = await fetch('https://mern-portfolio-eckd.onrender.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: '', email: '', subject: '', message: '' }); 
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section className="pt-10 pb-20" id="contact">
        <div className="container mx-auto px-4 max-w-[1150px] bg-purple-50 border-4 border-purple-900 rounded-[40px_15px_50px_25px] p-8 md:p-12 shadow-lg">
            
            <motion.h2 
                variants={headingAnimation}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="text-purple-900 text-[28px] font-bold leading-tight tracking-[-0.015em] pb-8 text-center uppercase"
            >
                Get In Touch
            </motion.h2>

            <div className="flex flex-col md:flex-row gap-10 md:items-start">
                
                {/* Left Side: Info & Freelance Links */}
                <div className="w-full md:w-[45%] flex flex-col gap-6 h-fit">
                    <p className="text-purple-800 text-sm leading-relaxed font-medium">
                        I'm currently available for freelance projects or full-time opportunities. 
                        Use the form to test my backend logic, or hire me directly via the platforms below!
                    </p>
                    
                    <div className="flex items-start gap-4">
                        <div className="bg-purple-200 p-3 rounded-full text-purple-700 border-2 border-purple-900">
                            <span className="material-symbols-outlined text-xl">mail</span>
                        </div>
                        <div>
                            <h3 className="text-purple-900 font-bold text-sm">Email Me</h3>
                            <a href="mailto:jahanzaibm120@gmail.com" className="text-purple-700 text-xs font-medium hover:underline hover:text-purple-900 transition-colors">
                                jahanzaibm120@gmail.com
                            </a>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="bg-purple-200 p-3 rounded-full text-purple-700 border-2 border-purple-900">
                            <span className="material-symbols-outlined text-xl">chat</span>
                        </div>
                        <div>
                            <h3 className="text-purple-900 font-bold text-sm">WhatsApp</h3>
                            <a href="https://wa.me/923711570073" target="_blank" rel="noopener noreferrer" className="text-purple-700 text-xs font-medium hover:underline hover:text-purple-900 transition-colors">
                                +92 371 1570073
                            </a>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="bg-purple-200 p-3 rounded-full text-purple-700 border-2 border-purple-900">
                            <span className="material-symbols-outlined text-xl">location_on</span>
                        </div>
                        <div>
                            <h3 className="text-purple-900 font-bold text-sm">Location</h3>
                            <p className="text-purple-700 text-xs font-medium">Mandi Bahauddin, Punjab</p>
                        </div>
                    </div>

                    {/* Freelance Platforms Section */}
                    <div className="mt-2 pt-6 border-t-2 border-purple-200">
                        <h3 className="text-purple-900 font-black text-sm uppercase mb-4 tracking-wide">Hire Me Directly</h3>
                        <div className="flex flex-wrap gap-4 items-center">
                            
                            {/* Upwork Button (Flat default, shadow on hover) */}
                            <a href="https://www.upwork.com/freelancers/~0156dbf67a8031770f?mp_source=share" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#14a800] text-white px-5 py-2.5 rounded-lg font-bold border-2 border-purple-900 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(88,28,135,1)] transition-all h-[44px]">
                                <img src="https://cdn.simpleicons.org/upwork/white" alt="Upwork" className="w-5 h-5" />
                                Upwork
                            </a>

                            {/* Contra Button (Flat default, shadow on hover) */}
                            <a href="https://contra.com/mian_m_jahanzaib" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#111111] text-white px-5 py-2.5 rounded-lg font-bold border-2 border-purple-900 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(88,28,135,1)] transition-all h-[44px]">
                                <svg className="w-4 h-4 text-[#FFD700]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 0C12 6.62742 17.3726 12 24 12C17.3726 12 12 17.3726 12 24C12 17.3726 6.62742 12 0 12C6.62742 12 12 6.62742 12 0Z" />
                                </svg>
                                Contra
                            </a>

                            {/* Freelancer Button (Flat default, shadow on hover) */}
                            <a href="https://www.freelancer.pk/u/mmjdeveloper?sb=t&frm=mmjdeveloper" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#29b2fe] text-white px-5 py-2.5 rounded-lg font-bold border-2 border-purple-900 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(88,28,135,1)] transition-all h-[44px]">
                                <img src="https://cdn.simpleicons.org/freelancer/white" alt="Freelancer" className="w-5 h-5" />
                                Freelancer
                            </a>

                        </div>
                    </div>

                </div>

                {/* Right Side: The Form */}
                <div className="w-full md:w-[55%] bg-white border-2 border-purple-900 rounded-xl p-6 shadow-sm h-fit">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div className="flex flex-col gap-1">
                                <label className="text-xs font-bold text-purple-900">Name</label>
                                <input 
                                    type="text" name="name" required value={formData.name} onChange={handleChange}
                                    placeholder="Your Name" 
                                    className="border-2 border-purple-200 rounded p-2 text-sm focus:outline-none focus:border-purple-600 transition-all font-medium text-purple-900" 
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="text-xs font-bold text-purple-900">Email</label>
                                <input 
                                    type="email" name="email" required value={formData.email} onChange={handleChange}
                                    placeholder="Your Email" 
                                    className="border-2 border-purple-200 rounded p-2 text-sm focus:outline-none focus:border-purple-600 transition-all font-medium text-purple-900" 
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="text-xs font-bold text-purple-900">Subject</label>
                            <input 
                                type="text" name="subject" required value={formData.subject} onChange={handleChange}
                                placeholder="Project Inquiry" 
                                className="border-2 border-purple-200 rounded p-2 text-sm focus:outline-none focus:border-purple-600 transition-all font-medium text-purple-900" 
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="text-xs font-bold text-purple-900">Message</label>
                            <textarea 
                                name="message" rows="3" required value={formData.message} onChange={handleChange}
                                placeholder="How can I help you?" 
                                className="border-2 border-purple-200 rounded p-2 text-sm focus:outline-none focus:border-purple-600 transition-all resize-none font-medium text-purple-900"
                            ></textarea>
                        </div>

                        <button 
                            type="submit" 
                            disabled={status === "sending"}
                            className="bg-purple-600 border-2 border-purple-900 text-white font-bold py-2 px-6 rounded-lg hover:bg-purple-700 hover:shadow-[4px_4px_0px_0px_#581c87] transition-all self-start mt-1 active:translate-y-[2px] active:shadow-none disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {status === "sending" ? "Sending..." : "Send Message"}
                        </button>

                        {/* Status Messages */}
                        {status === "success" && (
                            <p className="text-green-600 text-sm font-bold mt-1">✅ Message sent successfully!</p>
                        )}
                        {status === "error" && (
                            <p className="text-red-600 text-sm font-bold mt-1">❌ Something went wrong. Try again.</p>
                        )}
                    </form>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Contact
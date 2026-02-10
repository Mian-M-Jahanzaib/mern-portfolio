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

  // 1. State to store form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // 2. State for status messages (Loading, Success, Error)
  const [status, setStatus] = useState(null);

  // 3. Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 4. Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault(); // Stop page from reloading
    setStatus("sending");

    try {
      // Send data to your Backend
      const response = await fetch('https://mern-portfolio-eckd.onrender.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form
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

            <div className="flex flex-col md:flex-row gap-8">
                
                {/* Left Side: Info */}
                <div className="w-full md:w-1/3 flex flex-col gap-6">
                    <p className="text-purple-800 text-sm leading-relaxed font-medium">
                        I'm currently available for freelance projects or full-time opportunities. 
                        Let's discuss your next big idea.
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
                            {/* Replace with your number */}
                            <a href="https://wa.me/923001234567" target="_blank" rel="noopener noreferrer" className="text-purple-700 text-xs font-medium hover:underline hover:text-purple-900 transition-colors">
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
                            <p className="text-purple-700 text-xs font-medium">Mandi Bahauddin, Punjab, Pakistan</p>
                        </div>
                    </div>
                </div>

                {/* Right Side: The Form */}
                <div className="w-full md:w-2/3 bg-white border-2 border-purple-900 rounded-xl p-6 shadow-sm">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                                name="message" rows="4" required value={formData.message} onChange={handleChange}
                                placeholder="How can I help you?" 
                                className="border-2 border-purple-200 rounded p-2 text-sm focus:outline-none focus:border-purple-600 transition-all resize-none font-medium text-purple-900"
                            ></textarea>
                        </div>

                        <button 
                            type="submit" 
                            disabled={status === "sending"}
                            className="bg-purple-600 border-2 border-purple-900 text-white font-bold py-2 px-6 rounded-lg hover:bg-purple-700 hover:shadow-[4px_4px_0px_0px_#581c87] transition-all self-start mt-2 active:translate-y-[2px] active:shadow-none disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {status === "sending" ? "Sending..." : "Send Message"}
                        </button>

                        {/* Status Messages */}
                        {status === "success" && (
                            <p className="text-green-600 text-sm font-bold mt-2">✅ Message sent successfully!</p>
                        )}
                        {status === "error" && (
                            <p className="text-red-600 text-sm font-bold mt-2">❌ Something went wrong. Try again.</p>
                        )}
                    </form>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Contact
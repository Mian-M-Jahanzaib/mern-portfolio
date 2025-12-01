import React from 'react'
// 1. We must import all the components we built
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-background-light min-h-screen text-slate-800">
        {/* 2. The Navbar goes at the very top */}
        <Navbar />
        
        {/* 3. The Hero Section (Full Width)
            We keep this outside the centered container so the floating shapes 
            can use the full width of the screen. 
        */}
        <Hero />
        
        {/* 4. The Main Content Container (Centered & Max Width 1150px)
            This keeps your text content aligned nicely in the middle.
        */}
        <div className="max-w-[1150px] mx-auto bg-background-light">
           <Skills />
           <Experience />
           <Projects />
           <Contact />
        </div>

        {/* 5. The Footer goes at the very bottom */}
        <Footer />
    </div>
  )
}

export default App
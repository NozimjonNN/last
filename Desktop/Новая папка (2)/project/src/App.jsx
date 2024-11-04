import React from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import HeroSection from './Hero/Hero';
import About from './About/About';
import Skill from './Skill/Skill';
import Projects from './project/Project';
import Contact from './Contact/Contact';



function App() {
    return (
        <div className="App">
          <Navbar/>
        <HeroSection/>
        <About/>
        <Skill/>
        <Projects/>
        <Contact/>

      
        </div>
    );
}

export default App;

import { useState, useEffect } from 'react';
import { useRef } from 'react';
import './css/style.css'
import HeaderSection from './components/HeaderSection';
import ProfileSection from './components/ProfileSection';
import SkillsSection from './components/SkillsSection';
import ProjectSection from './components/ProjectSection';
import ContactSection from './components/ContactSection';


function App() {



  return (
    <div className="App" class="h-screen lg:w-full lg:m-0 lg:p-0 lg:overflow-x-hidden">
      <HeaderSection />
      <ProfileSection />
      <SkillsSection />   
      <ProjectSection />
      <ContactSection />
    </div>
  )
}

export default App

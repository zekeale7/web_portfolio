import { useState, useEffect } from 'react';
import { useRef } from 'react';
import '../css/style.css'
import image from  "/public/profile.jpg"
import background from  "/public/pexels-aleksandar-pasaric-3310691.jpg"

const SkillsSection = () => {

    const myRef = useRef();
    
    const [myElementIsVisible, setMyElementIsVisible] = useState();
       
    //Observer for first div
    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        setMyElementIsVisible(entry.isIntersecting)
      })
      observer.observe(myRef.current)
    });
    
  return (

    <div class="bg-gradient-to-r from-pink-500 to-yellow-500 w-full h-fit flex justify-center items-center text-center relative py-32 px-20">
    <div ref={myRef}>
      <h1 class={` ${myElementIsVisible ? ' transition-all custom-duration delay-500 text-white pb-9 text-8xl google-font leading-tight translate-x-0 lg:text-6xl' : "blur-sm opacity-0 text-white text-8xl google-font pb-9 leading-tight -translate-x-20 lg:text-6xl" }`}>I am skilled in the following technologies:</h1>
      
    
      <div class="grid grid-cols-5 gap-8 sm:grid-cols-3">
        <i class="devicon-html5-plain-wordmark colored hover:-translate-y-1 hover:scale-110 text-5xl "></i>
        <i class="devicon-javascript-plain colored hover:-translate-y-1 hover:scale-110 text-5xl "></i>  
        <i class="devicon-css3-plain-wordmark colored hover:-translate-y-1 hover:scale-110 text-5xl"></i>
        <i class="devicon-react-original colored hover:-translate-y-1 hover:scale-110 text-5xl"></i>  
        <i class="devicon-nodejs-plain-wordmark colored hover:-translate-y-1 hover:scale-110 text-5xl"></i>
        <i class="devicon-express-original-wordmark colored hover:scale-110 text-5xl"></i>
        <i class="devicon-materialui-plain colored hover:scale-110 text-5xl"></i>
        <i class="devicon-tailwindcss-original-wordmark colored hover:scale-110 text-5xl"></i>
        <i class="devicon-mysql-plain-wordmark colored hover:scale-110 text-5xl"></i>
        <i class="devicon-mongodb-plain-wordmark colored hover:scale-110 text-5xl"></i>
        <i class="devicon-docker-plain colored hover:scale-110 text-5xl"></i>
        <i class="devicon-figma-plain colored hover:scale-110 text-5xl"></i>
        <i class="devicon-github-original colored hover:scale-110 text-5xl"></i>  
        <i class="devicon-git-plain colored hover:scale-110 text-5xl"></i>
        <i class="devicon-npm-original-wordmark colored hover:scale-110 text-5xl"></i>
        <i class="devicon-python-plain colored  hover:scale-110 text-5xl"></i>
        <i class="devicon-visualstudio-plain colored hover:scale-110 text-5xl"></i>
        <i class="devicon-wordpress-plain colored hover:scale-110 text-5xl"></i>      
      </div>
    </div>

   
  </div>
  )
}

export default SkillsSection

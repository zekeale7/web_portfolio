import { useState, useEffect } from 'react';
import { useRef } from 'react';
import '../css/style.css'


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

    <div class="bg-gradient-to-r from-blue-500 to-yellow-500 w-full h-fit flex justify-center items-center text-center py-40 px-20">
    <div ref={myRef} class={` ${myElementIsVisible ? "bg-white px-32 py-20 rounded-2xl shadow-2xl transition-all custom-duration delay-700 translate-x-0": "translate-x-20 blur-sm opacity-0 py-20 px-32 rounded-2xl"}`}>
      <h1 class={` ${myElementIsVisible ? ' transition-all custom-duration delay-700 text-black pb-9 text-6xl google-font leading-tight translate-x-0 lg:text-6xl' : "blur-sm opacity-0 text-white text-6xl google-font pb-9 leading-tight translate-x-20 lg:text-6xl" }`}>I am skilled in the following technologies:</h1>
      
    
      <div class={` ${myElementIsVisible ? "transition-all custom-duration delay-1000 translate-x-0 grid grid-cols-5 gap-8 sm:grid-cols-3": "blur-sm opacity-0 translate-x-20 grid grid-cols-5 gap-8 sm:grid-cols-3"}`}>
        
        <i class="devicon-html5-plain-wordmark colored hover:-translate-y-1 hover:scale-110 text-5xl tooltip ">
          <span class="tooltiptext text-sm google-font">HTML5</span>
        </i>
        <i class="devicon-javascript-plain colored hover:-translate-y-1 hover:scale-110 text-5xl tooltip ">
          <span class="tooltiptext text-sm google-font">JavaScript</span>
        </i>  
        <i class="devicon-css3-plain-wordmark colored hover:-translate-y-1 hover:scale-110 text-5xl tooltip">
          <span class="tooltiptext text-sm google-font">CSS</span>
        </i>
        <i class="devicon-react-original colored hover:-translate-y-1 hover:scale-110 text-5xl tooltip">
          <span class="tooltiptext text-sm google-font">React.js</span>
        </i>  
        <i class="devicon-nodejs-plain-wordmark colored hover:-translate-y-1 hover:scale-110 text-5xl tooltip">
        <span class="tooltiptext text-sm google-font">Node.js</span>
        </i>
        <i class="devicon-express-original-wordmark colored hover:scale-110 text-5xl tooltip">
          <span class="tooltiptext text-sm google-font">Express.js</span>
        </i>
        <i class="devicon-materialui-plain colored hover:scale-110 text-5xl tooltip">
          <span class="tooltiptext text-sm google-font">Material UI</span>
        </i>
        <i class="devicon-tailwindcss-original-wordmark colored hover:scale-110 text-5xl tooltip">
          <span class="tooltiptext text-sm google-font">Tailwind CSS</span>
        </i>
        <i class="devicon-mysql-plain-wordmark colored hover:scale-110 text-5xl tooltip">
          <span class="tooltiptext text-sm google-font">MySQL</span>
        </i>
        <i class="devicon-mongodb-plain-wordmark colored hover:scale-110 text-5xl tooltip">
          <span class="tooltiptext text-sm google-font">MongoDB</span>
        </i>
        <i class="devicon-docker-plain colored hover:scale-110 text-5xl tooltip">
        <span class="tooltiptext text-sm google-font">Docker</span>
        </i>
        <i class="devicon-figma-plain colored hover:scale-110 text-5xl tooltip">
        <span class="tooltiptext text-sm google-font">Figma</span>
        </i>
        <i class="devicon-github-original colored hover:scale-110 text-5xl tooltip">
        <span class="tooltiptext text-sm google-font">Github</span>
          </i>  
        <i class="devicon-git-plain colored hover:scale-110 text-5xl tooltip">
        <span class="tooltiptext text-sm google-font">Git</span>
        </i>
        <i class="devicon-npm-original-wordmark colored hover:scale-110 text-5xl tooltip">
        <span class="tooltiptext text-sm google-font">NPM</span>
        </i>
        <i class="devicon-python-plain colored  hover:scale-110 text-5xl tooltip">
        <span class="tooltiptext text-sm google-font">Python</span>
        </i>
        <i class="devicon-visualstudio-plain colored hover:scale-110 text-5xl tooltip">
        <span class="tooltiptext text-sm google-font">Visual Studio Code</span>
        </i>
        <i class="devicon-wordpress-plain colored hover:scale-110 text-5xl tooltip">
        <span class="tooltiptext text-sm google-font">Wordpress</span>
          </i>      
      </div>
    </div>

   
  </div>
  )
}

export default SkillsSection

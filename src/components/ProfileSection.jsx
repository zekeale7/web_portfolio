import { useState, useEffect } from 'react';
import { useRef } from 'react';
import '../css/style.css'



const ProfileSection = () => {

    const myRefThree = useRef();
    
    const [myElementIsVisibleThree, setMyElementIsVisibleThree] = useState();
       
    //Observer for first div
    useEffect(() => {
      const observer_three = new IntersectionObserver((entries) => {
        const entry_three = entries[0];
        setMyElementIsVisibleThree(entry_three.isIntersecting)
      })
      observer_three.observe(myRefThree.current)
    });
    
  return (

    <div class="bg-gradient-to-r from-red-500 to-blue-500 w-full h-fit min-h-screen flex justify-center px-16 py-32 text-center items-center  lg:min-h=fit sm:h-fit sm:px-10">
   
    <div ref={myRefThree}  class={`${myElementIsVisibleThree ? "transition-all custom-duration delay-700 translate-x-0 bg-white rounded-2xl shadow-2xl p-9 flex flex-row gap-x-20 items-center lg:flex-col lg:items-center lg:justify-center lg:gap-0 lg:py-6 lg:my-4 sm:w-full sm:h-fit": " -translate-x-20 blur-sm opacity-0 bg-gray-300 rounded-2xl shadow-2xl p-9 flex flex-row gap-x-20 items-center lg:flex-col lg:items-center lg:justify-center lg:gap-0 lg:py-16 sm:w-full sm:h-fit"}`}>
  
      <div class={` ${myElementIsVisibleThree ? "bg-gray-500 shadow-2xl rounded-lg transition-all custom-duration delay-1000 custom-width custom-height sm:w-full translate-x-0 sm:h-full": 'custom-width custom-height blur-sm opacity-0 -translate-x-20 sm:w-full sm:h-full' }`}></div>
      
      <div class={`${myElementIsVisibleThree ? "transition-all custom-duration delay-1000 translate-x-0  text-left custom-width flex flex-col gap-y-6 lg:text-center lg:gap-y-8 lg:justify-center lg:items-center sm:w-full": "blur-sm opacity-0 -translate-x-20 text-left custom-width flex flex-col gap-y-6 lg:text-center lg:gap-y-8 lg:justify-center lg:items-center sm:w-full"}`}>
        <h1 class="text-black quick-font text-5xl lg:pt-6">About me</h1>
        <p class="text-gray-600 google-font text-xl leading-tight">I've been studying website development for the past 2 years and have recently 
        completed my diploma of information Technology, specialsing in frontend and backend web development. I'm currently undertaking a bachelor of Information Technology at Queensland University of Technology.</p>

           <p class="text-gray-600 text-xl google-font leading-tight">As a programmer, i'm enthusiastic about learning new technologies, and applying them to my personal projects. 
           I particualy enjoy problem solving and thinking creatively to overcome chanlleges faced in programming.</p>
         <button class="google-font w-40 p-2 border-white border-2 rounded-3xl bg-slate-400 hover:bg-slate-700 delay-100 duration-300">Download Resume</button>  
      </div>
    </div>


  </div>
  )
}

export default ProfileSection

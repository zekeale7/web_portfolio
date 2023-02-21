import { useState, useEffect } from 'react';
import { useRef } from 'react';
import '../css/style.css'
import image from  "/public/profile.jpg"
import background from  "/public/pexels-aleksandar-pasaric-3310691.jpg"

const HeaderSection = () => {

    const myRefFour = useRef();
    
    const [myElementIsVisibleFour, setMyElementIsVisibleFour] = useState();
       
    //Observer for first div
    useEffect(() => {
      const observer_four = new IntersectionObserver((entries) => {
        const entry_four = entries[0];
        setMyElementIsVisibleFour(entry_four.isIntersecting)
      })
      observer_four.observe(myRefFour.current)
    });
    
  return (

        <div ref={myRefFour}  class="bg-gradient-to-r from-pink-500 to-yellow-500 w-full h-fit min-h-screen flex justify-center items-center relative lg:w-auto lg:h-big lg:text-center lg:px-20 sm:pb-6 sm:h-big ">
          <div class="h-2/3 w-2/3 ml-28 mr-96 flex flex-auto flex-col lg:m-0 lg:justify-center lg:custom-width">
            <div class="lg:flex lg:justify-center">
            <div class="w-fit lg:w-fit">
              <h1 class={`${myElementIsVisibleFour ? "text-black text-2xl google-font transition-all custom-duration delay-500": "text-black text-2xl google-font blur-sm opacity-0 -translate-y-20"}`}>Hi! My Name is Ezequiel Aleman</h1>
            </div>
          </div>
            <p class={`${myElementIsVisibleFour ? "transition-all custom-duration delay-700 text-white google-font text-5xl leading-tight lg:text-blue-200": "blur-sm opacity-0 -translate-y-20 text-blue-200 google-font text-5xl leading-tight lg:text-blue-200"}`}>
             I am a fullstack website developer specialising in frontend development.</p>
              <div class={`${myElementIsVisibleFour ? " transition-all custom-duration delay-200 mt-8 flex flex-auto lg:justify-center sm:flex-col sm:justify-between sm:gap-y-5": "blur-sm opacity-0 translate-y-20 mt-8 flex flex-auto lg:justify-center sm:flex-col sm:justify-between sm:gap-y-5"}`}>
                <a href="https://tailwindcss.com/docs/theme" class="text-white border-2 py-4 px-14 mr-8 other-font sm:m-0 sm:px-0">Click here</a>
                <a href="https://tailwindcss.com/docs/theme" class="text-white border-2 py-4 px-14 other-font sm:px-0">Click here</a>
              </div>
          </div>
        </div>
  )
}

export default HeaderSection

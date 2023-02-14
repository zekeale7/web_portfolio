import { useState, useEffect } from 'react';
import { useRef } from 'react';
import './css/style.css'

function App() {

const myRef = useRef();
const myRefTwo = useRef();
const myRefThree = useRef();

const [myElementIsVisible, setMyElementIsVisible] = useState();
const [myElementIsVisibleTwo, setMyElementIsVisibleTwo] = useState();
const [myElementIsVisibleThree, setMyElementIsVisibleThree] = useState();

//Observer for first div
useEffect(() => {
  const observer = new IntersectionObserver((entries) => {
    const entry = entries[0];
    setMyElementIsVisible(entry.isIntersecting)
  })
  observer.observe(myRef.current)
});


//Observer for second div
useEffect(() => {
  const observer_two = new IntersectionObserver((entries) => {
  const entry_two = entries[0];
    setMyElementIsVisibleTwo(entry_two.isIntersecting)
  })
  observer_two.observe(myRefTwo.current)
});

//Observer for first div
useEffect(() => {
  const observer_three = new IntersectionObserver((entries) => {
    const entry_three = entries[0];
    setMyElementIsVisibleThree(entry_three.isIntersecting)
  })
  observer_three.observe(myRefThree.current)
});


  return (
    <div className="App" class="h-screen">
        <div class="bg-yellow-700 w-full h-fit min-h-screen flex justify-center items-center relative">
          <div class="h-2/3 w-2/3 ml-28 mr-96 flex flex-auto flex-col">
            <div class="w-fit">
              <h1 class="text-black text-2xl google-font type-animation">My Name is Ezequiel Aleman</h1>
            </div>
            <p class="text-white google-font text-5xl leading-tight">
             I am a fullstack website developer specialsings in frntend development.</p>
              <div class="mt-8 flex flex-auto ">
                <a href="https://tailwindcss.com/docs/theme" class="text-white border-2 py-4 px-14 mr-8 other-font">Click here</a>
                <a href="https://tailwindcss.com/docs/theme" class="text-white border-2 py-4 px-14 other-font">Click here</a>
              </div>
          </div>
        </div>
         <div class="bg-yellow-100 w-full h-fit min-h-screen flex justify-center px-16 text-center items-center relative">
         <div class="custom-shape-divider-top-1676354291">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
            </svg>
          </div>
          <div ref={myRefThree} class="flex flex-row gap-x-20 items-center">
            <div>
              <img src="./src/images/155267199_1170701173384671_6474017597783076115_n (1).jpg" class="custom-width custom-height rounded-2xl"></img>
            </div>
            <div class="text-left w-96 flex flex-col gap-y-6">
              <h1 class="text-black google-font text-5xl">About me</h1>
              <p class="text-gray-600 google-font text-xl leading-tight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod delectus sunt assumenda eos nostrum ad facilis veritatis, vitae
                 laudantium in consequatur harum eum. Quibusdam rem, aut nihil commodi voluptates sunt.</p>
                 <p class="text-gray-600 google-font text-xl leading-tight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod delectus sunt assumenda eos nostrum ad facilis veritatis, vitae
                 laudantium in consequatur harum eum. Quibusdam rem, aut nihil commodi voluptates sunt.</p>
               <button class="google-font w-40 p-2 border-white border-2 rounded-3xl bg-slate-400 hover:bg-slate-700 delay-100 duration-300">Download Resume</button>  
            </div>
          </div>

          <div class="custom-shape-divider-bottom-1676258472">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
            </svg>
        </div>
        </div>
        <div class="bg-yellow-500 w-full h-fit min-h-screen flex justify-center px-16 text-center items-center relative">
          <div ref={myRef}>
            <h1 class={` ${myElementIsVisible ? ' transition-all duration-1000 text-white text-8xl google-font leading-tight translate-x-0 blur-none' : "blur-sm opacity-0 text-white text-8xl google-font leading-tight -translate-x-full" }`}>Hello There! I am skilled in the following languages</h1>
            
          
            <p class={` ${myElementIsVisible ? ' transition-all duration-1000 text-white text-2xl google-font leading-tight translate-x-0 blur-none' : " opacity-0 text-white text-2xl google-font leading-tight -translate-x-full blur-sm  " }`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius inventore dolore voluptate, 
            molestias distinctio tenetur deserunt quos at 
            rerum sed corrupti corporis tempora nemo, laboriosam quasi repellat. Veniam, quia nesciunt!</p>

          </div>
          <div class="custom-shape-divider-bottom-1676258959">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
            </svg>
          </div>
         
        </div>
       
        <div class="bg-white w-full h-auto items-center justify-items-center my-12">
          <h1 class="text-black google-font text-5xl text-center pb-16 ">Projects</h1>
          <div ref={myRefTwo} class='bg-white grid grid-cols-2 grid-rows-2 gap-y-16 items-center justify-items-center'>

            <div class={`${myElementIsVisibleTwo ? " transition duration-500 translate-x-0 blur-none custom-width h-72 bg-white rounded-r-xl rounded-l-xl bg-[url('./src/images/pexels-aleksandar-pasaric-3310691.jpg')] bg-cover flex items-end justify-center shadow-2xl hover:-translate-y-1 hover:scale-110 "
            : "custom-width h-72 bg-white rounded-r-xl rounded-l-xl bg-[url('./src/images/pexels-aleksandar-pasaric-3310691.jpg')] bg-cover shadow-2xl hover:-translate-y-1 hover:scale-110 duration-100 opacity-0 -translate-x-full blur-sm"}`}>
             
              <div class='bg-white/75 rounded-b-xl'>
                <h1 class="text-slate-500 text-2xl google-font text-center">High Street Gym Website</h1>
                <p class="text-slate-500 text-1xl google-font text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet quisquam deleniti temporibus non, .</p>
              </div>
            </div>

            <div class={`${myElementIsVisibleTwo ? " transition duration-1000 translate-x-0 blur-none custom-width h-72 bg-white rounded-r-xl rounded-l-xl bg-[url('./src/images/pexels-aleksandar-pasaric-3310691.jpg')] bg-cover flex items-end justify-center shadow-2xl hover:-translate-y-1 hover:scale-110"
            : "custom-width h-72 bg-white rounded-r-xl rounded-l-xl bg-[url('./src/images/pexels-aleksandar-pasaric-3310691.jpg')] bg-cover shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 opacity-0 -translate-x-full blur-sm "}`}>
             
              <div class="bg-white/75  rounded-b-xl">
                <h1 class="text-slate-500 text-2xl google-font text-center">The Mobile Hour Website</h1>
                <p class="text-slate-500 text-1xl google-font text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet quisquam deleniti temporibus non, .</p>
              </div>
            </div>
            <div class={`${myElementIsVisibleTwo ? " transition duration-500 translate-x-0 blur-none custom-width h-72 bg-white rounded-r-xl rounded-l-xl bg-[url('./src/images/pexels-aleksandar-pasaric-3310691.jpg')] bg-cover flex items-end justify-center shadow-2xl hover:-translate-y-1 hover:scale-110"
            : "custom-width h-72 bg-white rounded-r-xl rounded-l-xl bg-[url('./src/images/pexels-aleksandar-pasaric-3310691.jpg')] bg-cover shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 opacity-0 -translate-x-full blur-sm "}`}>
             
              <div class="bg-white/75  rounded-b-xl">
                <h1 class="text-slate-500 text-2xl google-font text-center">Weather API</h1>
                <p class="text-slate-500 text-1xl google-font text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet quisquam deleniti temporibus non, .</p>
              </div>
            </div>
            <div class={`${myElementIsVisibleTwo ? " transition duration-1000 translate-x-0 blur-none custom-width h-72 bg-white rounded-r-xl rounded-l-xl bg-[url('./src/images/pexels-aleksandar-pasaric-3310691.jpg')] bg-cover flex items-end justify-center shadow-2xl hover:-translate-y-1 hover:scale-110"
            : "custom-width h-72 bg-white rounded-r-xl rounded-l-xl bg-[url('./src/images/pexels-aleksandar-pasaric-3310691.jpg')] bg-cover shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 opacity-0 -translate-x-full blur-sm "}`}>
              <div class="bg-white/75  rounded-b-xl">
                <h1 class="text-slate-500 text-2xl google-font text-center">ML Strength Website</h1>
                <p class="text-slate-500 text-1xl google-font text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet quisquam deleniti temporibus non, .</p>
              </div>
            </div>
            </div>
        </div>
        <section class="bg-black w-full h-fit min-h-screen px-16 text-center relative justify-center flex flex-row gap-x-36">
        <div class="custom-shape-divider-top-1676259761">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
          </svg>
        </div>
          <div class="flex text-left">
            <div>
            <h1 class="text-white text-5xl google-font leading-tight pt-32 pb-10">Get in Touch</h1>
              <form class="text-white flex flex-col gap-5 pb-10">
                <input id="name" class="text-black custom-width p-2 rounded-md bg-slate-300 placeholder:text-black placeholder:opacity-50" placeholder='Name'></input>
                <input id="phone" class="text-black opacity-1 custom-width p-2 rounded-md bg-slate-300 placeholder:text-black placeholder:opacity-50" placeholder='Phone'></input>
                <input id="email" class="text-black opacity-1 custom-width p-2 rounded-md bg-slate-300 placeholder:text-black placeholder:opacity-50" placeholder='Email'></input>
                <textarea id="message" class="text-black opacity-1 custom-width p-2 h-52 rounded-md bg-slate-300 placeholder:text-black placeholder:opacity-50" placeholder='Write a Message'></textarea>
                <input class="text-center w-28 p-2 border-white border-2 rounded-3xl bg-slate-400 hover:bg-slate-700 delay-100 duration-300" type="submit" value="Submit"></input>
              </form>
            </div>
          </div>
          <div class="flex text-left">
          <div>
            <h1 class="text-white text-5xl google-font leading-tight pt-32 pb-10">My Contact Details</h1>
              <ul class="flex flex-col gap-y-7">
                <li class="text-gray-500 text-sm">EMAIL:</li>
                <li class="text-white text-sm">zekeale777@gmail.com</li>
                <li class="text-gray-500 text-sm">PHONE:</li>
                <li class="text-white text-sm">0421613017</li>
                <li class="text-gray-500 text-sm">ADDRESS:</li>
                <li class="text-white text-sm">
                  758 Nudgee Road Northgate
                  <br></br>
                  Brisbane, 4013
                  <br></br>
                  QLD, Australia
                </li>
              </ul>
            </div>
          </div>
        </section>
    </div>
  )
}

export default App

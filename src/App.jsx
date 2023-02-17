import { useState, useEffect } from 'react';
import { useRef } from 'react';
import './css/style.css'
import image from  "/public/profile.jpg"
import background from  "/public/pexels-aleksandar-pasaric-3310691.jpg"

function App() {

const myRef = useRef();
const myRefTwo = useRef();
const myRefThree = useRef();
const myRefFour = useRef();

const [myElementIsVisible, setMyElementIsVisible] = useState();
const [myElementIsVisibleTwo, setMyElementIsVisibleTwo] = useState();
const [myElementIsVisibleThree, setMyElementIsVisibleThree] = useState();
const [myElementIsVisibleFour, setMyElementIsVisibleFour] = useState();

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

//Observer for first div
useEffect(() => {
  const observer_four = new IntersectionObserver((entries) => {
    const entry_four = entries[0];
    setMyElementIsVisibleFour(entry_four.isIntersecting)
  })
  observer_four.observe(myRefFour.current)
});


  return (
    <div className="App" class="h-screen lg:w-full lg:m-0 lg:p-0 lg:overflow-x-hidden">
        <div ref={myRefFour}  class="bg-gradient-to-r from-pink-500 to-yellow-500 w-full h-fit min-h-screen flex justify-center items-center relative lg:w-auto lg:h-big lg:text-center lg:px-20 sm:pb-6 sm:h-big ">
          <div class="h-2/3 w-2/3 ml-28 mr-96 flex flex-auto flex-col lg:m-0 lg:justify-center lg:custom-width">
            <div class="lg:flex lg:justify-center">
            <div class="w-fit lg:w-fit">
              <h1 class={`${myElementIsVisibleFour ? "text-black text-2xl google-font transition-all custom-duration delay-200": "text-black text-2xl google-font blur-sm opacity-0 -translate-y-20"}`}>Hi! My Name is Ezequiel Aleman</h1>
            </div>
          </div>
            <p class={`${myElementIsVisibleFour ? "transition-all custom-duration delay-200 text-white google-font text-5xl leading-tight lg:text-blue-200": "blur-sm opacity-0 -translate-y-20 text-blue-200 google-font text-5xl leading-tight lg:text-blue-200"}`}>
             I am a fullstack website developer specialising in frontend development.</p>
              <div class={`${myElementIsVisibleFour ? " transition-all custom-duration delay-200 mt-8 flex flex-auto lg:justify-center sm:flex-col sm:justify-between sm:gap-y-5": "blur-sm opacity-0 translate-y-20 mt-8 flex flex-auto lg:justify-center sm:flex-col sm:justify-between sm:gap-y-5"}`}>
                <a href="https://tailwindcss.com/docs/theme" class="text-white border-2 py-4 px-14 mr-8 other-font sm:m-0 sm:px-0">Click here</a>
                <a href="https://tailwindcss.com/docs/theme" class="text-white border-2 py-4 px-14 other-font sm:px-0">Click here</a>
              </div>
          </div>
        </div>
       
         <div class="bg-gradient-to-r from-pink-500 to-yellow-500 w-full h-fit min-h-screen flex justify-center px-16 text-center items-center relative lg:min-h=fit sm:h-fit sm:px-10">
   
          <div ref={myRefThree}  class="flex flex-row gap-x-20 items-center lg:flex-col lg:items-center lg:justify-center lg:gap-0 lg:py-16 sm:w-full sm:h-fit">
        
            <div >
              <img src={image} class={` ${myElementIsVisibleThree ? "transition-all custom-duration delay-200 custom-width custom-height sm:w-full translate-x-0 sm:h-full": 'custom-width custom-height blur-sm opacity-0 -translate-x-20 sm:w-full sm:h-full' }`}></img>
            </div>
            
            <div class={`${myElementIsVisibleThree ? "transition-all custom-duration delay-200 translate-x-0  text-left custom-width flex flex-col gap-y-6 lg:text-center lg:gap-y-8 lg:justify-center lg:items-center sm:w-full": "blur-sm opacity-0 -translate-x-20 text-left custom-width flex flex-col gap-y-6 lg:text-center lg:gap-y-8 lg:justify-center lg:items-center sm:w-full"}`}>
              <h1 class="text-black google-font text-5xl sm:pt-6">About me</h1>
              <p class="text-gray-600 google-font text-xl leading-tight">I've been studying website development for the past 2 years and have recently 
              completed my diploma of information Technology, specialsing in frontend and backend web development. I'm currently undertaking a bachelor of Information Technology at Queensland University of Technology.</p>

                 <p class="text-gray-600 text-xl google-font leading-tight">As a programmer, i'm enthusiastic about learning new technologies, and applying them to my personal projects. 
                 I particualy enjoy problem solving and thinking creatively to overcome chanlleges faced in programming.</p>
               <button class="google-font w-40 p-2 border-white border-2 rounded-3xl bg-slate-400 hover:bg-slate-700 delay-100 duration-300">Download Resume</button>  
            </div>
          </div>
     

        </div>
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
       
        <div class="bg-gradient-to-r from-pink-500 to-yellow-500 w-full h-auto items-center justify-items-center">
          <h1 class="text-black google-font text-5xl text-center pb-16 ">Projects</h1>
          <div ref={myRefTwo} class='bg-gradient-to-r from-pink-500 to-yellow-500 grid grid-cols-2 grid-rows-2 gap-y-16 items-center justify-items-center lg:grid-cols-1 sm:px-7'>

          <div style={{backgroundImage: `url(${background})`}} class={`${myElementIsVisibleTwo ? " transition duration-500 translate-x-0 custom-width h-72 bg-white rounded-r-xl rounded-l-xl bg-cover flex items-end justify-center hover:-translate-y-1 hover:scale-110 sm:w-full"
            : "custom-width h-72 bg-white rounded-r-xl rounded-l-xl bg-cover duration-500 -translate-x-full sm:w-full"}`}>
             
              <div class='bg-white/75 rounded-b-xl'>
                <h1 class="text-slate-500 text-2xl google-font text-center">High Street Gym Website</h1>
                <p class="text-slate-500 text-1xl google-font text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet quisquam deleniti temporibus non, .</p>
              </div>
            </div>
            <div style={{backgroundImage: `url(${background})`}} class={`${myElementIsVisibleTwo ? " transition duration-500 translate-x-0 custom-width h-72 bg-white rounded-r-xl rounded-l-xl  bg-cover flex items-end justify-center hover:-translate-y-1 hover:scale-110 sm:w-full "
            : "custom-width h-72 bg-white rounded-r-xl rounded-l-xl bg-cover duration-500 -translate-x-full sm:w-full"}`}>
             
              <div class='bg-white/75 rounded-b-xl'>
                <h1 class="text-slate-500 text-2xl google-font text-center">High Street Gym Website</h1>
                <p class="text-slate-500 text-1xl google-font text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet quisquam deleniti temporibus non, .</p>
              </div>
            </div>

            <div  style={{backgroundImage: `url(${background})`}} class={`${myElementIsVisibleTwo ? " transition duration-500 translate-x-0 custom-width h-72 bg-white rounded-r-xl rounded-l-xl bg-cover flex items-end justify-center hover:-translate-y-1 hover:scale-110 sm:w-full "
            : "custom-width h-72 bg-white rounded-r-xl rounded-l-xl bg-cover duration-500 -translate-x-full sm:w-full"}`}>
             
              <div class='bg-white/75 rounded-b-xl'>
                <h1 class="text-slate-500 text-2xl google-font text-center">High Street Gym Website</h1>
                <p class="text-slate-500 text-1xl google-font text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet quisquam deleniti temporibus non, .</p>
              </div>
            </div>
            <div  style={{backgroundImage: `url(${background})`}} class={`${myElementIsVisibleTwo ? " transition duration-500 translate-x-0 custom-width h-72 bg-white rounded-r-xl rounded-l-xl bg-cover flex items-end justify-center hover:-translate-y-1 hover:scale-110 sm:w-full "
            : "custom-width h-72 bg-white rounded-r-xl rounded-l-xl bg-cover duration-500 -translate-x-full sm:w-full"}`}>
             
              <div class='bg-white/75 rounded-b-xl'>
                <h1 class="text-slate-500 text-2xl google-font text-center">High Street Gym Website</h1>
                <p class="text-slate-500 text-1xl google-font text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet quisquam deleniti temporibus non, .</p>
              </div>
            </div>
            </div>
        </div>
        <div class="bg-gradient-to-r from-pink-500 to-yellow-500 w-full h-fit min-h-screen px-16 text-center relative justify-center flex flex-row gap-x-36 lg:flex-col lg:gap-0 lg:px-10 lg:h-fit sm:px-7">
     
          <div class="flex text-left lg:text-center lg:justify-center lg:pb-16">
            <div class="custom-width">
            <h1 class="text-white text-5xl google-font leading-tight pt-32 pb-10">Get in Touch</h1>
              <form action="https://formsubmit.co/zekeale777@gmail.com" method="POST" class="text-white flex flex-col gap-5 pb-10 lg:pb-0 lg:items-center">
                <input id="name" type="text" class="text-black custom-width p-2 rounded-md bg-slate-300 placeholder:text-black placeholder:opacity-50 sm:w-full" placeholder='Name'></input>
                <input id="phone" type="number" class="text-black opacity-1 custom-width p-2 rounded-md bg-slate-300 placeholder:text-black placeholder:opacity-50 sm:w-full" placeholder='Phone'></input>
                <input id="email" type="email" class="text-black opacity-1 custom-width p-2 rounded-md bg-slate-300 placeholder:text-black placeholder:opacity-50 sm:w-full" placeholder='Email'></input>
                <textarea id="message" class="text-black opacity-1 custom-width p-2 h-52 rounded-md bg-slate-300 placeholder:text-black placeholder:opacity-50 sm:w-full" placeholder='Write a Message'></textarea>
                <input class="text-center w-28 p-2 border-white border-2 rounded-3xl bg-slate-400 hover:bg-slate-700 delay-100 duration-300" type="submit" value="Submit"></input>
              </form>
            </div>
          </div>
          <hr class="pt-10"></hr>
          <div class="flex text-left lg:text-center lg:justify-center lg:pb-20">
          <div>
            <h1 class="text-white text-5xl google-font leading-tight pt-32 pb-10 lg:pt-10">My Contact Details</h1>
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
        </div>
    </div>
  )
}

export default App

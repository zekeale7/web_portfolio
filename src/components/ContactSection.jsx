import '../css/style.css'


const ContactSection = () => {
    
  return (

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
  )
}

export default ContactSection

import React from 'react'
import ayam from "../assets/ayam.png"

const Home = () => {
  return (
    <div className='Home  h-screen flex items-center pt-14'>
        <div className="left h-screen w-2/3 pt-40">
            <h1 className='text-white text-5xl font-semibold my-5'>HI, I'M AYAM !</h1>
            <h1 className='text-[#55E6A5] text-5xl font-semibold my-5'>FRONT END DEVELOPER</h1>
            <p className='text-[#A2A2A2] pr-40'>I'm a passionate Front-End Developer with a strong foundation in modern web technologies and a sharp eye for design. I specialize in crafting responsive, intuitive, and visually appealing user interfaces that deliver seamless user experiences. By combining my expertise in HTML, CSS, JavaScript, and modern frameworks like React, I transform complex ideas into functional and engaging web applications that resonate with users.</p>
        </div>
        <div className="right h-screen w-1/3 pt-14 ">
           <img  className="rounded-full" src={ayam} width={1500} alt="My Photo"/>
        </div>
    </div>
  )
}

export default Home
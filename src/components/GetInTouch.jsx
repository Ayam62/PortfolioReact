import React from 'react'

const GetInTouch = () => {
  return (
    <div className='getContainer flex justify-center items-center m-28  '>
        <div className="getBox bg-[#151C27] p-8  rounded-lg">
            <h1 className='text-white text-4xl pb-5 font-normal bg-transparent'>Get In Touch</h1>
            <p  className='text-[#A2A2A2] pb-5 bg-transparent'>Please take a moment to fill out the form below and I'll contact you soon!</p>
            <form action="" className='flex flex-col bg-transparent m-0 p-0'>
                <input type="text" placeholder='Your Name' className='bg-transparent pb-2 pl-2 m-4 flex items-center text-left text-white pt-2 border-solid border-[#A2A2A2] rounded-md  border-opacity-100 border-2' />
                <input type="text" placeholder=' Email' className='bg-transparent pb-2 pl-2 m-4 flex items-center text-left text-white pt-2 border-solid border-[#A2A2A2] rounded-md  border-opacity-100 border-2'/>
                <input type="text" placeholder='Phone Number' className='bg-transparent pb-2 pl-2 m-4 flex items-center text-left text-white pt-2 border-solid border-[#A2A2A2] rounded-md  border-opacity-100 border-2'/>
                <input type="text" placeholder='Message' className='bg-transparent pb-2 pl-2 m-4 flex items-center text-left text-white pt-2 border-solid border-[#A2A2A2] rounded-md  border-opacity-100 border-2'/>
            </form>
        </div>
    </div>
  )
}

export default GetInTouch
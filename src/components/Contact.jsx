import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full py-4 bg-[#222529] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/0a30de62-4e7c-4b9d-9f22-21e32a1bc6ea" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-2'>
                <p className='text-4xl font-bold inline border-b-4 border-teal-400 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>Submit the form below to reach out to me</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-[1px] hover:bg-[#ccd6f6] hover:text-[black] px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact
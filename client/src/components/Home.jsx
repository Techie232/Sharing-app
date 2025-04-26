import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

   const url = useRef();
   const navigate = useNavigate();

   const handleNavigation = () => {
      if (url.current.length == 0) {
         return;
      }
      navigate(`/${url.current}`);
   }

   const handleEnter = (e) => {
      if (e.key === 'Enter') {
         handleNavigation();
      }
   }

   return (
      <div className='h-[92%] w-full grid place-items-center bg-gradient-to-r from-blue-500 via-teal-500 to-green-500'>
         <div className='w-full h-full grid place-items-center'>
            <div className='text-2xl font-serif animate-bounce'>Welcome to Sharer App!</div>

            <div className='font-medium text-[#e6f312]'>
               A simple, fast, and secure way to share text. No sign-up required. Just create a link, share it,
               and let others access your message instantly.
            </div>

            {/* main thing to consider */}
            <div>
               <input type="text" placeholder='URL ...' className='outline-none p-2 rounded-full text-center font-bold text-orange-400'
                  onChange={(e) => url.current = e.target.value}
                  onKeyDown={handleEnter}
               />
               <button
                  className='ml-2 bg-gray-300 p-2 rounded-md hover:opacity-50 transition-all duration-100'
                  onClick={handleNavigation}

               >
                  Go
               </button>
            </div>

            <ul className='text-center'>
               <li className='text-[#2D3748]'><span className='font-semibold text-[#9B1C31]'>No accounts needed</span> – Just share the link.</li>
               <li className='text-[#2D3748]'><span className='font-semibold text-[#9B1C31]'>Instant access</span> – Your text is ready to share as soon as you create it.</li>
               <li className='text-[#2D3748]'><span className='font-semibold text-[#9B1C31]'>Privacy</span> – Your data is safe and temporary.</li>
            </ul>

            <div className='text-xl font-light'>Start sharing now by typing below!</div>
         </div>

      </div >
   )
}

export default Home
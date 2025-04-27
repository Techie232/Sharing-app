import React from 'react'
import { Link } from 'react-router-dom'

const Success = () => {
   return (
      <div className='w-[90%] h-[88%] flex flex-col justify-evenly items-center text-4xl font-extralight text-green-800'>

         <Link
            className='text-[#1ac0de]'
            to={'/'}
         >Home</Link>

         <div className='flex gap-10 flex-col text-center'>
            <div className='animate-pulse'>Your Clip has been Created!</div>
            <div>Thanks for USING</div>
         </div>
      </div>
   )
}

export default Success
import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Post from './components/Post';
import { Toaster } from 'react-hot-toast';
import Success from './components/Success';

const App = () => {

   return (
      <div className='w-screen h-screen bg-[#818177]'>
         <div className='h-[8%] bg-[#c37261] text-center py-2 font-semibold text-3xl text-green-300'>
            Sharer App <span className='text-sm font-thin text-yellow-200'>That let's you share with the Beloved Ones</span>
         </div>
         <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/:postName' element={<Post />} />
            <Route path='/success' element={<Success />} />
         </Routes>
         <Toaster />
         <div className='flex justify-center bg-slate-400 h-[4%]'>
            <div className='font-mono text-center  w-[20%] rounded-md'>Made by M. Sameem</div>
         </div>
      </div>
   )
}

export default App
import copy from 'copy-to-clipboard'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import toast from 'react-hot-toast'

const expiryArray = [
   {
      value: 1,
      text: "After 1 minute",
   },
   {
      value: 2,
      text: "After 2 minutes",
   },
   {
      value: 5,
      text: "After 5 minutes",
   },
   {
      value: 60,
      text: "After 1 Hour",
   },
]

const Post = () => {

   const { postName } = useParams();
   const navigate = useNavigate();
   const [userInput, setUserInput] = useState('');
   const [expiryTime, setExpiryTime] = useState(1);
   const [text, setText] = useState('');
   const [loading, setLoading] = useState(false);

   const inputTextHandler = (e) => {
      setUserInput(e.target.value);
   }

   const createPost = async () => {
      try {
         await axios.post(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/create`, {
            routeParam: postName,
            description: userInput,
            expiryTime
         });

         toast.success("Clip Created Successfully");
         navigate('/success');

      } catch (error) {
         toast.error("Something went WRONG!");
      }
   }

   const fetchPost = async () => {
      setLoading(true);
      try {
         const response = await axios.get(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/get?routeParam=${postName}`)
         setText(response?.data?.data?.content);
         setLoading(false);
      } catch (error) {
      }
   }

   const copyHandler = async () => {
      copy(text)
      toast.success('Copied to your clipboard', {
         style: {
            border: '0.5px solid #713200',
            padding: '16px',
            color: '#713200',
         },
         iconTheme: {
            primary: '#713200',
            secondary: '#FFFAEE',
         },
      });
   }

   useEffect(() => {
      fetchPost();
   }, [])

   return (
      <div className='w-[95%] h-[90%] mx-auto mt-2'>
         <div className='flex justify-center gap-5 w-full'>
            <div className='w-[50%]'>
               <Link className='w-[30%] text-xl font-thin hover:text-orange-800' to={'/'}>Back</Link>
            </div>
            {
               loading ?
                  <span className='text-center text-lime-400'>Loading...</span>
                  :
                  (!text?.length ?
                     <span className='text-[#16f4ed]'>Paste what you want to!</span>
                     :
                     <span className='text-[#81ed16]'>Here is your Stuff!</span>)
            }
         </div>

         <textarea
            className='w-full mt-2 h-[80%] outline-none rounded-xl p-2 resize-none shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)]'
            placeholder='Enter content here ...'
            onChange={inputTextHandler}
            value={text ? text : userInput}
         >
         </textarea>

         {
            loading ?
               <div className='text-center mt-6 text-lime-400'>Loading...</div>
               :
               (!(text?.length) ?
                  <div className='flex font-semibold mt-4 justify-between'>
                     <div className='flex gap-2 items-center w-[30%] text-xs text-center'>
                        <span className='font-serif text-red-700'>Delete After </span>
                        <select name="" id=""
                           className='w-[130px] h-[20px] rounded-md'
                           onChange={(e) => setExpiryTime(Number(e.target.value))}
                        >
                           {
                              expiryArray.map((itm, ind) => (
                                 <option
                                    key={ind}
                                    value={itm.value}
                                    className='text-center outline-none'
                                 >
                                    {itm.text}
                                 </option>
                              ))
                           }
                        </select>
                     </div>
                     <button
                        className='bg-[#726383] p-1 rounded-xl hover:scale-110 transition-all duration-100 mr-10'
                        onClick={createPost}
                     >
                        Create Clip
                     </button>
                  </div>

                  :
                  <div className='w-full text-center mt-4'>
                     <button
                        className='bg-slate-600 p-3 rounded-xl hover:text-purple-300'
                        onClick={copyHandler}
                     >
                        Copy
                     </button>
                  </div>
               )
         }

      </div >
   )
}

export default Post
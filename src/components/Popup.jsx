import React from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'

const Popup = ({togglePopup}) => {
  return (
    <>
        <div className='w-full h-full inset-0 fixed bg-black bg-opacity-50 flex px-12 justify-center items-center' onClick={togglePopup}> 
            <div className=' w-[400px] h-[200px] bg-purple-200 text-black p-4 rounded-md relative shadow-lg'>
                <span className=" absolute top-5 right-5 hover:cursor-pointer hover:scale-125 duration-300">
                  <AiFillCloseCircle size={24} className=' text-red-600' onClick={togglePopup}/>
                </span>
                <h1 className='pt-1 pb-4 text-xl font-bold'> Transaction Successful! </h1>
                <p className=" text-justify"> Your Products have been processed and is cleared from the Cart! </p>
            </div>
        </div>      
    </> 
  )
}

export default Popup
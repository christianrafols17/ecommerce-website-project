import React from 'react'

const Popup = ({togglePopup}) => {
  return (
    <>
        <div className='w-full h-full inset-0 fixed bg-black bg-opacity-50 flex px-12 justify-center items-center'> 
            <div className=' w-[400px] h-[200px] bg-purple-200 text-black p-4 rounded-md relative shadow-lg'>
                <button className=" absolute top-4 right-4 bg-red-500 hover:bg-red-700 p-2 rounded-md" onClick={togglePopup}> Close </button>
                <h1 className='pt-2 pb-4 text-xl font-bold'> Transaction Successful! </h1>
                <p className=" text-justify"> Your Products have been processed and cleared! </p>
            </div>
        </div>      
    </>  
  )
}

export default Popup
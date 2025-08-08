import React from 'react'

const Shelter = () => {

  const handleBackClick = () => {
    window.history.back(); // Navigate back to the previous page
  };

  return (
    <div className='flex flex-col min-h-screen justify-center items-center'>
      
      <div className="w-sm md:w-md rounded-2xl bg-amber-500 p-5">
        <button className='flex text-[14px] md:text-[17px] mb-3 items-center gap-x-1 cursor-pointer ' onClick={handleBackClick}>
         <i className="fa-solid fa-arrow-left"> </i> Back 
        </button>
        <div className="text-center">
          <h1 className='font-bold text-2xl md:text-3xl'>Animal Shelter Portal</h1>
          <p className='text-[14px] md:text-[17px]'>Create your animal shelter account</p>
        </div>
        <form>
        <div className="mt-2 mb-2">
          <label className='block mb-1 text-[14px] md:text-[17px]' htmlFor="name">Full name:</label>
          <input className='w-full py-2 px-3 border text-[14px] md:text-[17px]' type="text" placeholder='Enter your full name' name='name' id='name' autoComplete='off' required/>
        </div>
        <div className="mb-2">
          <label className='block mb-1 text-[14px] md:text-[17px]' htmlFor="email">Email:</label>
          <input className='w-full py-2 px-3 border text-[14px] md:text-[17px]' type="email" placeholder='Enter your email' name='email' id='email' autoComplete='off' required/>
        </div>
        <div className="mb-2">
          <label className='block mb-1 text-[14px] md:text-[17px]' htmlFor="password">Password:</label>
          <input className='w-full py-2 px-3 border text-[14px] md:text-[17px]' type="password" placeholder='Enter your password' name='password' id='password' maxLength={12} required/>
        </div>
        <div className="mb-2">
          <label className='block mb-1 text-[14px] md:text-[17px]' htmlFor="confirm">Confirm Password:</label>
          <input className='w-full py-2 px-3 border text-[14px] md:text-[17px]' type="password" placeholder='Confirm your password' name='confirm' id='confirm' required />
        </div>
        <button className='bg-white mt-2 p-2 rounded-2xl text-[14px] md:text-[17px] font-semibold cursor-pointer transition-all hover:bg-green-300 w-full'>Create account</button>
        </form>
      </div>
    </div>
  )
}

export default Shelter
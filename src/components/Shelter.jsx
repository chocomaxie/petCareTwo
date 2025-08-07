import React from 'react'

const Shelter = () => {
  return (
    <div className='flex flex-col min-h-screen justify-center items-center'>
      <div className="flex flex-col w-108 rounded-2xl bg-amber-500 p-5">
        <div className="text-center">
          <h1 className='text-3xl font-bold'>Animal Shelter Portal</h1>
          <p>Create your animal shelter account</p>
        </div>
        <form>
        <div className="mt-2 mb-2">
          <label className='block mb-1' htmlFor="name">Full name</label>
          <input className='w-full p-2 border' type="text" placeholder='Enter your full name' name='name' id='name' autoComplete='off' required/>
        </div>
        <div className="mb-2">
          <label className='block mb-1' htmlFor="email">Email</label>
          <input className='w-full p-2 border' type="email" placeholder='Enter your email' name='email' id='email' autoComplete='off' required/>
        </div>
        <div className="mb-2">
          <label className='block mb-1' htmlFor="password">Password</label>
          <input className='w-full p-2 border' type="password" placeholder='Enter your password' name='password' id='password' maxLength={12} required/>
        </div>
        <div className="mb-2">
          <label className='block mb-1' htmlFor="confirm">Confirm Password</label>
          <input className='w-full p-2 border' type="password" placeholder='Confirm your password' name='confirm' id='confirm' required />
        </div>
        <button className='bg-white mt-2 p-2 rounded-2xl cursor-pointer transition-all hover:bg-green-300 w-full'>Create account</button>
        </form>
      </div>
    </div>
  )
}

export default Shelter
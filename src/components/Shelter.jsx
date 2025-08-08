import React, { useState } from 'react';
import axios from 'axios';

const Shelter = () => {
  const url = 'http://localhost/petCareCapstone/formSubmit.php';

  const handleBackClick = () => {
    window.history.back(); // Navigate back to the previous page
  };

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    // Validation
    if (!name || !email || !password || !confirm) {
      alert('Please fill in all fields');
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address');
      return;
    }

    if (password !== confirm) {
      alert('Passwords do not match');
      return;
    }

    // Prepare form data
    const fData = new FormData();
    fData.append('name', name);
    fData.append('email', email);
    fData.append('password', password);
    fData.append('confirm', confirm);

    // Send POST request
    axios.post(url, fData)
      .then((response) => {
        alert(response.data);
        // Optionally, reset form or redirect
      })
      .catch((error) => {
        alert('An error occurred: ' + error.message);
      });
  };

  return (
    <div className='flex flex-col min-h-screen justify-center items-center'>
      <div className="w-sm md:w-md rounded-2xl bg-green-500 p-5">
        <button
          className='flex text-[14px] md:text-[17px] mb-3 items-center gap-x-1 cursor-pointer '
          onClick={handleBackClick}
        >
          <i className="fa-solid fa-arrow-left"></i> Back
        </button>
        <div className="text-center">
          <h1 className='font-bold text-2xl md:text-3xl'>Animal Shelter Portal</h1>
          <p className='text-[14px] md:text-[17px]'>Create your animal shelter account</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mt-2 mb-2">
            <label className='block mb-1 text-[14px] md:text-[17px]' htmlFor="name">Username:</label>
            <input
              className='w-full py-2 px-3 border text-[14px] md:text-[17px]'
              type="text"
              placeholder='Enter username'
              id='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete='off'
              required
            />
          </div>
          <div className="mb-2">
            <label className='block mb-1 text-[14px] md:text-[17px]' htmlFor="email">Email:</label>
            <input
              className='w-full py-2 px-3 border text-[14px] md:text-[17px]'
              type="email"
              placeholder='Enter email'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete='off'
              required
            />
          </div>
          <div className="mb-2">
            <label className='block mb-1 text-[14px] md:text-[17px]' htmlFor="password">Password:</label>
            <input
              className='w-full py-2 px-3 border text-[14px] md:text-[17px]'
              type="password"
              placeholder='Enter password'
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              maxLength={12}
              required
            />
          </div>
          <div className="mb-2">
            <label className='block mb-1 text-[14px] md:text-[17px]' htmlFor="confirm">Confirm Password:</label>
            <input
              className='w-full py-2 px-3 border text-[14px] md:text-[17px]'
              type="password"
              placeholder='Confirm your password'
              id='confirm'
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className='bg-white mt-2 p-2 rounded-2xl text-[14px] md:text-[17px] font-semibold cursor-pointer transition-all hover:bg-green-300 w-full'
            id='submit'
          >
            Create account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Shelter;
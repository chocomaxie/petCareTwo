import React from "react";
import adoption from '/assets/adoption.png';
import shelter from '/assets/animal-shelter.png';
import {useNavigate} from 'react-router-dom';

const FirstPage = () => {

  const navigate = useNavigate();
  const handleShelterClick = () => {
    navigate('/shelter'); 
  };

  const handleAdopterClick = () => {
    navigate('/adopter');
  };

  return (
    <div className="flex flex-col min-h-screen justify-center p-5 md:py-5 md:px-10 text-center ">
      <div className="mb-5 mx-auto lg:w-1/2 ">
        <h1 className="font-bold mb-5 text-4xl md:text-5xl lg:text-6xl">Welcome to PetCare
          {""} <i className="fa-solid fa-paw"></i>
        </h1>
        <p className="text-[14px] md:text-[20px]">
          Connect loving pets with caring families. Whether you're a shelter
          looking to find homes for animals or someone ready to adopt, you're in
          the right place.
        </p>
      </div>

      <div className="flex flex-col flex-wrap justify-center items-center md:flex-row mx-auto gap-5 w-70 md:w-180">
        <div className="flex-1 border p-3 rounded-3xl hover:scale-105 transition-transform duration-300 cursor-pointer" onClick={handleShelterClick}>
          <img className="w-25 mx-auto md:w-30" src={shelter} alt="" />
          <h1 className='font-bold md:text-2xl'>Shelter</h1>
          <p className='text-[14px] md:text-[17px]'>Animal shelters and rescue organizations. Create an account to post pets looking for homes.</p>
        </div>
        <div className="flex-1 border p-3 rounded-3xl hover:scale-105 transition-transform duration-300 cursor-pointer" onClick={handleAdopterClick}>
          <img className="w-25 mx-auto md:w-30" src={adoption} alt="" />
          <h1 className='font-bold md:text-2xl'>Adopter</h1>
          <p className='text-[14px] md:text-[17px]'>Looking for a new companion? Browse available pets from local shelters. No account needed!</p>
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
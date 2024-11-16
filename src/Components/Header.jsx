import React from 'react';
import logo from '../assets/logo.png';
import { format } from 'date-fns';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

export default function Header() {

  return (
    <div className="flex flex-col gap-3 justify-center items-center">
      <img className="w-4/12 mx-auto" src={logo} alt="" />
      <p>Journalism Without Fear or Favour</p>
      <p>{format(new Date(), 'eeee, MMMM dd, yyyy')}</p> 
      <div className=' hidden md:flex flex-row justify-start  my-shadow '>
        <p className=' px-6 bg-[#7987e3e4] py-1 text-black font-semibold' >Latest</p>
        <Marquee  speed={50} className='flex flex-row gap-5  '>
          <Link>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, accusamus!</Link>
          <Link>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, accusamus!</Link>
          <Link>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, accusamus!</Link>
        </Marquee>
      </div>
    </div>
  );
}

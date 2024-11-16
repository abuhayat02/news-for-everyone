import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './../Components/Navbar';
import Header from '../Components/Header';

export default function Root() {
  return (
    <div className='container mx-auto' >
      <Header></Header>
      <div className='sticky my-shadow backdrop-blur-sm mb-10 top-0 z-50' >
        <Navbar ></Navbar>
      </div>
      <div>
        <Outlet  ></Outlet>
      </div>
    </div>
  )
}

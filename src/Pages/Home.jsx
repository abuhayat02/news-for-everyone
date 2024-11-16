import React, { useContext } from 'react'
import Catagorbuttons from './../Components/Catagorbuttons';
import { Outlet, useLocation } from 'react-router-dom';
import SignInMethods from '../Components/SignInMethods';
import FindUsOn from '../Components/FindUsOn';
import DataProvider, { DataInfo } from '../Components/Authentications/DataProvider';

export default function Home() {
  let {setDetalsLoaction}= useContext(DataInfo)
  let getDetalseLoactions = useLocation()
  setDetalsLoaction(getDetalseLoactions)
  return (
    <div className='md:grid   grid-cols-12 gap-2'>
      <div className=' sticky py-10 col-span-3'>
        <p className='font-bold py-6 px-3' >All Categorys</p>
        <Catagorbuttons className=''></Catagorbuttons>
      </div>
      <div className='h-screen overflow-scroll py-10 no-scrollbar col-span-6'>
        <p className='font-bold py-6 px-3' >Dragon News Home</p>
        <Outlet className=' fixed overflow-scroll' ></Outlet>
      </div>
      <div className=' sticky py-10 col-span-3'>
      <p className='font-bold py-6 px-3' >Login With</p>
        <SignInMethods></SignInMethods>
        <FindUsOn></FindUsOn>
      </div>
    </div>
  )
}

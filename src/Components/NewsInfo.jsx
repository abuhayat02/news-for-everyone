import React, { useContext } from 'react'
import Header from './Header'
import SignInMethods from './SignInMethods'
import FindUsOn from './FindUsOn'
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom'
import { DataInfo } from './Authentications/DataProvider'

export default function NewsInfo() {
  let {detalsLoaction} = useContext(DataInfo);
  let loc = useLocation()
  console.log(loc)
  let naviget = useNavigate()
  let backHome = ()=>{
    naviget( loc.state ? loc.state : detalsLoaction.pathname)
  }
  let data = useLoaderData();
  return (
    <div className='container mx-auto'>
      <Header></Header>
      <div className='w-full gap-8 min-h-screen md:grid grid-cols-12'>
        <div className='  col-span-8'>
          <h1>Dragon News</h1>
          <div className=' flex flex-col gap-3 p-4'>
            <img className='w-full' src={data.data[0].image_url} alt="" />
            <h1 className='text-2xl font-bold'>{data.data[0].title}</h1>
            <p className='text-justify text-xs'>
              {data.data[0].details}
            </p>
            <button onClick={backHome} className='px-2 w-fit py-1 my-shadow' >All news in this category</button>
          </div>
        </div>
        <div className=' my-shadow px-8 col-span-4'>
          <p className='font-bold py-6 px-3' >Login With</p>
          <SignInMethods></SignInMethods>
          <FindUsOn></FindUsOn>

        </div>

      </div>
    </div>
  )
}

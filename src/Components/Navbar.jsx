import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import parson from '../assets/user.png'
import { DataInfo } from './Authentications/DataProvider'

export default function Navbar() {
  let { user , logOut } = useContext(DataInfo);
  return (
    <div className='flex  flex-row my-9 justify-between items-center'>
      <div className='flex-1'>{user ? user.displayName : "no user"}</div>
      <div className='flex flex-2 flex-row gap-2 flex-grow text-center justify-center items-center'>
        <Link to={'/'} >Home</Link>
        <Link to={'/about'} >About</Link>
        <Link to={'/career'} >Career</Link>
      </div>
      <div className='flex-1 items-center flex gap-2 justify-end'>
        <img src={user ? user.photoURL :parson} className='rounded-full w-10 h-10' alt="" />
        {
          user ? <Link onClick={logOut} className=' bg-black px-8 py-2 text-white font-bold' >Logout</Link> : <Link to={'/authentications/sign-in'} className=' bg-black px-8 py-2 text-white font-bold' >Login</Link>


        }
      </div>
    </div>
  )
}

import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar'

export default function Authentications() {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  )
}

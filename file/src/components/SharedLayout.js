import React from 'react'
import { Outlet } from 'react-router'
import Navbar from './Navbar'

function SharedLayout() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default SharedLayout
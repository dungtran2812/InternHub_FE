import React from 'react'
import Header from '../../components/Header'
import { Outlet } from 'react-router-dom'

const HomeLayout = () => {
  return (
    <p>
      <Header/>
      <Outlet/>
    </p>
  )
}

export default HomeLayout
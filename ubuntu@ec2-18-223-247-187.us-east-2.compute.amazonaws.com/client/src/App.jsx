//Implementing Outlet middleware from react-router-dom to allow the routes browsing
import React from 'react';
import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import Navbar from './components/Navbar';
//Aos animations
import {useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'

function App() {

  useEffect(()=>{
    Aos.init({duration: 1000})
}, []);

  return (
    <>
      <Navbar/>
      <Outlet/>
    </>
  )
}

export default App;
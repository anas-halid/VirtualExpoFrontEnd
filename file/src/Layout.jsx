import React, { useState , useEffect, useRef } from 'react';
import * as PANOLENS from "panolens";
import guy from './assets/guy.png';
import Isometric_cube3 from './assets/Isometric_cube3.png';
import Isometric_cube2 from './assets/Isometric_cube2.png';
import newbackground from './assets/newbackground.png' ; 

import Home from './components/Home';
import venue from './components/image1.jpeg';



const Layout = () => {
  useEffect(() => {
   
  }, []);

  return (
  <>
  { <Home/> }
  </>
);
}

export default Layout;
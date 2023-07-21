import React, { useState , useEffect, useRef } from 'react';
import * as PANOLENS from "panolens";
import background from './pano3.jpg' ; 



const Home = () => {


    const panorama = new PANOLENS.ImagePanorama(background);
    const viewer = new PANOLENS.Viewer({
      container: document.querySelector("#coucou"),
      controlBar: false
    });
    var infospot, infospot2, infospot3, infospot4, infospot5, infospot6;
    
    // each infospot is a booth - Anas
    infospot = new PANOLENS.Infospot();
    infospot.position.set( 7500.00, -2665.23, -3996.49 );
    infospot.addHoverText( 'Huawei' );
    infospot.addEventListener('click', function () {
      window.location.replace("Huawei") // contacts is temporary, it should be booth 1, I used this for showcasing and error fixing
    });
    
    
    infospot2 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
    infospot2.position.set( 4000.00, -500.25, -597.56 );
    infospot2.addHoverText( 'Xiaomi' );
    infospot2.addEventListener('click', function () {
      window.location.replace("Xiaomi") // contacts is temporary, it should be booth 1, I used this for showcasing and error fixing
    });

    infospot3 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
    infospot3.position.set( -2500.00, -205.25, 300.56 );
    infospot3.addHoverText( 'Asus' );
    infospot3.addEventListener('click', function () {
      window.location.replace("Asus") // contacts is temporary, it should be booth 2, I used this for showcasing and error fixing
    });

    infospot4 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
    infospot4.position.set( 3300.00, 535.25, 9000.56 );
    infospot4.addHoverText( 'Oppo' );
    infospot4.addEventListener('click', function () {
      window.location.replace("Oppo") // contacts is temporary, it should be booth 4, I used this for showcasing and error fixing
    });

    infospot5 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
    infospot5.position.set( 4500.00, 235.25, -9000.56 );
    infospot5.addHoverText( 'Nvidia' );
    infospot5.addEventListener('click', function () {
      window.location.replace("Nvidia") // contacts is temporary, it should be booth 5, I used this for showcasing and error fixing
    });

    infospot6 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
    infospot6.position.set( 9300.00, -535.25, 100.56 );
    infospot6.addHoverText( 'Acer' );
    infospot6.addEventListener('click', function () {
      window.location.replace("Acer") // contacts is temporary, it should be booth 6, I used this for showcasing and error fixing
    });
    
    
      
    panorama.add( infospot );
    panorama.add( infospot2 );
    panorama.add( infospot3 );
    panorama.add( infospot4 );
    panorama.add( infospot5 );
    panorama.add( infospot6 );
    
    
    viewer.add(panorama);
    
    



  useEffect(() => {
    viewer.onWindowResize();
    
  }, []);



  return (
  <>
     
     <h1><b>Welcome to the 2023 Virtual Tech Expo</b></h1> {/* I'm finally done with the EXPO part implementation (there's still the booth part) of the 3D implementation... IT's 3:26am rn HAHAHAHA - ANAS */}
      <div id="coucou" />
  
  </>
);
}

export default Home;
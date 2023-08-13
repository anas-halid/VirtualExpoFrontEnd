import React, { useState , useEffect, useRef } from 'react';
import * as PANOLENS from "panolens";
import background from './pano3orig.jpeg' ; 



const Home = () => {


    const panorama = new PANOLENS.ImagePanorama(background);
    const viewer = new PANOLENS.Viewer({
      container: document.querySelector("#coucou"),
      controlBar: false
    });
    var infospot, infospot2, infospot3, infospot4, infospot5, infospot6;
    
    // each infospot is a booth - Anas
    infospot = new PANOLENS.Infospot(600, "https://cdn.iconscout.com/icon/free/png-512/free-huawei-3521494-2944938.png?f=avif&w=512");
    infospot.position.set( -4000.00, 455.23, -3996.49 );
    infospot.addHoverText( 'Huawei' );
    infospot.addEventListener('click', function () {
      window.location.replace("Huawei") // contacts is temporary, it should be booth 1, I used this for showcasing and error fixing
     
    });
    
    
    infospot2 = new PANOLENS.Infospot( 600, "https://cdn.iconscout.com/icon/free/png-512/free-xiaomi-2-722656.png?f=avif&w=512" );
    infospot2.position.set( 6000.00, 500.25, -6597.56 );
    infospot2.addHoverText( 'Xiaomi' );
    infospot2.addEventListener('click', function () {
      window.location.replace("Xiaomi") // contacts is temporary, it should be booth 1, I used this for showcasing and error fixing
    });

    infospot3 = new PANOLENS.Infospot( 900, "https://cdn.iconscout.com/icon/free/png-512/free-asus-1-285252.png?f=avif&w=512" );
    infospot3.position.set( -9500.00, 505.25, 300.56 );
    infospot3.addHoverText( 'Asus' );
    infospot3.addEventListener('click', function () {
      window.location.replace("Asus") // contacts is temporary, it should be booth 2, I used this for showcasing and error fixing
    });

    infospot4 = new PANOLENS.Infospot( 300, "https://www.oppo.com/content/dam/oppo/common/file/image/logo.png" );
    infospot4.position.set( 5300.00, 435.25, 5000.56 );
    infospot4.addHoverText( 'Oppo' );
    infospot4.addEventListener('click', function () {
      window.location.replace("Oppo") // contacts is temporary, it should be booth 4, I used this for showcasing and error fixing
    });

    infospot5 = new PANOLENS.Infospot( 600, "https://cdn.iconscout.com/icon/free/png-512/free-nvidia-282591.png?f=avif&w=512" );
    infospot5.position.set( -5000.00, 505.25, 5900.56 );
    infospot5.addHoverText( 'Nvidia' );
    infospot5.addEventListener('click', function () {
      window.location.replace("Nvidia") // contacts is temporary, it should be booth 5, I used this for showcasing and error fixing
    });

    infospot6 = new PANOLENS.Infospot( 900, "https://cdn.iconscout.com/icon/free/png-512/free-acer-282504.png?f=avif&w=512" );
    infospot6.position.set( 9900.00, 535.25, 100.56 );
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
import React, { useState, useEffect } from 'react';
import axios from "axios" ; 
import YoutubeEmbed from "./YoutubeEmbed";




export default function Livedemo() {


    const [data, setData] = useState([])
    
    useEffect(() => {
      if (window.location.href.indexOf('Xiaomi') > -1){
      fetch('/Xiaomi/Livedemo')
        .then((response) => response.json())
        .then((data) => setData(data))}
    }, [])


    useEffect(() => {
      if (window.location.href.indexOf('Huawei') > -1){
      fetch('/Huawei/Livedemo')
        .then((response) => response.json())
        .then((data) => setData(data))}
    }, [])

    
    useEffect(() => {
      if (window.location.href.indexOf('Oppo') > -1){
      fetch('/Oppo/Livedemo')
        .then((response) => response.json())
        .then((data) => setData(data))}
    }, [])
  

    
    useEffect(() => {
      if (window.location.href.indexOf('Acer') > -1){
      fetch('/Acer/Livedemo')
        .then((response) => response.json())
        .then((data) => setData(data))}
    }, [])
  

    useEffect(() => {
      if (window.location.href.indexOf('Asus') > -1){
      fetch('/Asus/Livedemo')
        .then((response) => response.json())
        .then((data) => setData(data))}
    }, [])
  

    useEffect(() => {
      if (window.location.href.indexOf('Nvidia') > -1){
      fetch('/Nvidia/Livedemo')
        .then((response) => response.json())
        .then((data) => setData(data))}
    }, [])
  
    return (
      <div>
        <ul>
          {data.map((item) => (
            <li key={item._id}>
              
             <h2 class="title"  ><br />{item.CompanyName}</h2><br /> {/* <-- company brand Title */}
             <div class ="small-container">
             
              <ul>
         
              </ul>
              </div>
              <h2>Product Video</h2>
              <br></br>
              <h2><YoutubeEmbed embedId= {item.Proddemolink} /></h2>
            </li>
            
          ))}
        </ul>
      </div>
    )
  }
  

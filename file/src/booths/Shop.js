import React from 'react'
import { Link } from 'react-router-dom'
import bg from '../components/booth3.png' ; 







export default function Shop() {


  const handleClickScroll = () => {
    const element = document.getElementById('section-1');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }}




  return (
    <div style={{backgroundColor: '#4E6E83'}}>  

    <div class="fade-in-text">
      <br></br>
    <h1>Welcome to Xiaomi Exhibition Booth!</h1>
    </div>
    <br></br>
    <h3 id="centeralign">Here you can learn about our latest products and services.</h3>
    <div id="container">
   <button className="btn-scroll" onClick={handleClickScroll}>
      Go To Booth
   </button>
    </div>  
   
    <ul>
      <li id ="menu" style={{ position: 'relative', left: 90, top: 515 }} ><Link to='Livedemo'>View Product Video</Link></li>
      <li id ="menuright"style={{ position: 'relative', left: -85, top: 440}}><Link to='items'>view products</Link></li>
      <li id ="menu" style={{ position: 'relative', left: 90, top: 515 }}><Link to='/Proddemo'>Live Demo</Link></li>
      <li id ="menuright" style={{ position: 'relative', left: -85, top: 440}}><Link to='/Livechat'>Live Chat</Link></li>
      <div id="section-1">
      <img id ="bground" src={bg} />
      </div>
    </ul>
    </div>
  )
}


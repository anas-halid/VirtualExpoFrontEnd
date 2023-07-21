import {Component, useEffect, useState} from 'react';
import axios from 'axios'

/*
mongodb.connect(
    connectionString,
    { useNewUrlParser: true, useUnifiedTopology: true },
    function (err, client) {
      db = client.db()
      
    }
  )
  
  app.use(express.json())
  
  
  
  app.get('/', function (req, res) {
    // getting all the data
    db.collection('compadmin')
      .find({
          CompanyName: 'Xiaomi'
        })
      .toArray(function (err, items) {
        res.send(items)
      })
  })
  */
function Products() {


   
      const [data, setData] = useState([])
    
      useEffect(() => {
        if (window.location.href.indexOf('Xiaomi') > -1){
        fetch('/Xiaomi/items')
          .then((response) => response.json())
          .then((data) => setData(data))}
      }, [])


      useEffect(() => {
        if (window.location.href.indexOf('Huawei') > -1){
        fetch('/Huawei/items')
          .then((response) => response.json())
          .then((data) => setData(data))}
      }, [])

      
      useEffect(() => {
        if (window.location.href.indexOf('Oppo') > -1){
        fetch('/Oppo/items')
          .then((response) => response.json())
          .then((data) => setData(data))}
      }, [])
    

      
      useEffect(() => {
        if (window.location.href.indexOf('Acer') > -1){
        fetch('/Acer/items')
          .then((response) => response.json())
          .then((data) => setData(data))}
      }, [])
    

      useEffect(() => {
        if (window.location.href.indexOf('Asus') > -1){
        fetch('/Asus/items')
          .then((response) => response.json())
          .then((data) => setData(data))}
      }, [])
    

      useEffect(() => {
        if (window.location.href.indexOf('Nvidia') > -1){
        fetch('/Nvidia/items')
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
                  {item.Products.map((product) => (
                    
                      <div class="row">
                        <div class ="col-4">
                          
                    <li key={product.Product}>
                      <img src={product.Imagelink}  class="center"></img>
                     <h4> <b> {product.Product}</b></h4> <br />
                     <h3>  <p>Price: {product.Price} &nbsp;&nbsp;&nbsp;    In-Stock: {product.Inventory} </p></h3> <br />
                     
                     <h3> <b>Product Details:</b> <br /><p>{product.Desc}</p></h3>  <br /><br />
                     <a href="" class="button"> Buy Now </a>
                     <hr></hr><br />
                    </li>
                          
                        </div>
                      </div>
                    
                  ))}
                </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )
    }
    

    



     


export default Products;
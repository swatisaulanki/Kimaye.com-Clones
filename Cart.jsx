import React, { useState } from 'react'
import Navbar from '../components/Navbar'

function Cart() {

    var swati = JSON.parse(localStorage.getItem("cartitms"))
     
    console.log(swati)

    
  return (
    <div>
        <Navbar/>
      <h1>cart</h1>
      <div className="ss">
      {swati.map(item => (
    <div className="card">
       
        <div className="card-image">
            <img  className="imgdata"src={item.imgURL} alt={item.name} />
        </div>
           <p>{item.title}</p>                            
        <div className="price">
        <h3>{item.sellingPrice}</h3>
        <h4>{item.mrp}</h4>                                            
        </div>  
        
      {/* <button onClick={()=>handledelte(id)}>Remove</button> */}
    </div>
        
    
))};
      </div>

</div>


  )
}

export default Cart

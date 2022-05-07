import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'

function Cart() {

  const navigate = useNavigate();

    var swati = JSON.parse(localStorage.getItem("cartitms"))
     
    console.log(swati)

    
  return (
    <div>
        <Navbar/>
      <h1>CART</h1>
      <div className="ss" style={{display:"grid", gridTemplateColumns: "repeat(3,1fr)"}}>
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

      <button style={{marginTop: "20px",
    border: "3px solid orangered",
    borderRadius: "50px",
    width: "300px",
    height: "50px",
    fontWeight: "bolder",
    textAlign:"center",
    backgroundColor: "rgba(255, 68, 0, 0.514)"}} onClick={() => navigate("/address")}>
      PROCEED TO ADDRESS
    </button>

</div>


  )
}

export default Cart

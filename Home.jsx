import React from 'react'
import data from   '../Data-Details/data.json'
import Navbar from '../components/Navbar'
import "./Product.css"
import Cart from './Cart'
import { Link } from 'react-router-dom'
const Home = () => {
  console.log(data)
  var arr = JSON.parse(localStorage.getItem("cartitms")) || []      
  const addcart=(item)=>{
  
  
      arr.push(item)
      localStorage.setItem("cartitms", JSON.stringify(arr))
      console.log(arr)
    }
  
  return (
   <div>
     <Navbar/>
     <Link to="/cart">cart</Link>

     <div className="container">
            
{/* map through the data and display the cards */}
{data.map(item => (
    <div className="card" key={item.id}>
       
        <div className="card-image">
            <img  className="imgdata"src={item.imgURL} alt={item.name} />
        </div>
           <p>{item.title}</p>                            
        <div className="price">
        <h3>{item.sellingPrice}</h3>
        <h4>{item.mrp}</h4>                                            
        </div>  
        <div className="all-btn">
        <button onClick={()=>addcart(item)}>Add to Cart</button>                    
                        </div> 
                        {/* <div className={container}>
           <button>add to cart</button>
            
           </div>
       */}
    </div>
        
    
))};
</div>
   </div>
   
  )
}

export default Home

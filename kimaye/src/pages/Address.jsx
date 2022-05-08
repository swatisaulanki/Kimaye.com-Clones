import React from 'react'
import styles from '../components/styles/address.module.css'

const Address = () => {

    const completed = () =>{
        alert("Your Order Is Placed");
        window.open("/");
    }

  return (
    <div>
        {/* <img className={styles.mono} src='https://cdn.shopify.com/s/files/1/0449/5225/6667/files/website-logo_400x.png?v=1596288204' /> */}
        
        <h4 style={{marginTop: "30px", textDecoration:"none"}}>Contact Information</h4>

        <input type="text" placeholder="Email" className={styles.input} />

        <h4 style={{marginTop: "30px", textDecoration:"none"}}>Shipping Address</h4>

        <select className={styles.input}>
            <option value="">Select Country</option>
            <option value="india">India</option>
        </select>

        <div>
            <input type="text" placeholder="First Name" class="name" className={styles.nameinput} />
            <input type="text" placeholder="Last name" class="name" className={styles.nameinput} />
        </div>

        <input type="text" placeholder="Address" id="address" className={styles.input}  />

        <div>
            <input type="text" placeholder="City" class="city" className={styles.cityinput} />
            <input type="text" placeholder="State" class="city" className={styles.cityinput} />
            <input type="text" placeholder="Pincode" class="city" className={styles.cityinput} />
        </div>

        <input type="text" placeholder="Phone" id="phone" className={styles.input} />

        <br></br>

        <button className={styles.button} onClick={completed}>Proceed To Payment</button>

      
    

    </div>
    
    
  )
}

export default Address
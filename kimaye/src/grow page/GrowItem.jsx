import React from "react";
import styles from "./Grow.module.css"
const GrowItem = ({item}) => {
    const {imageurl,heading,para} = item
    return (
       <div>
             <div className={styles.image}>
                 <img src={imageurl} />
             </div>
             <div>
                 <h2>{heading}</h2>
                 <p>{para}</p>
                 <div><p>read more</p></div>
             </div>
             
       </div>
    )
    
  };
  export default GrowItem;
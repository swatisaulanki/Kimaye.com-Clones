import React from "react";
import data from "./data.json"
import GrowItem from "./GrowItem";
import styles from "./Grow.module.css"

export const GrowDetails = () => {
    console.log(data)

    return(
        <>
        <div ><img className={styles.banner} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKJ6idNPYX3S0aG-8mRlZQZOsCgq2qYFUKJg&usqp=CAU" alt="" /></div>
        <div className={styles.starter}>
            <h1>GROW WITH KIMAYE</h1>
            <p>Home / Archive by Category "Grow with Kimaye"</p>
            <div className={styles.upper}>
             <div>NUTRITION</div>
             <div>LIFESTYLE MANAGEMENT</div>
             <div>CHILD NUTRITION</div>
             <div>STORAGE & HANDLING</div>
             </div>
        </div>
        
       
        <div className={styles.rightside}>
        <div className={styles.growcontainer}>
        {data.map((item)=>(

             <div>
             <GrowItem item={item}/>
             </div>
             


        ))}
        
    </div>
    <div className={styles.fgg}>
        <h3 className={styles.search}>SEARCH</h3>
        <div>
            <input type="text" placeholder="search for posts" className={styles.input}/>
            <button className={styles.buttoon}>Search</button>
        </div>
        <div >
            <h3 className={styles.search}>CATEGORIES</h3>
            <p className={styles.pick}>Pick a link list to show here in your under sidebar</p>
            
        </div>
        <div >
            <h3 className={styles.search}>RECENT POST</h3>
            
        </div>
        
            
        
    </div>
    </div>
    </>
    )
}

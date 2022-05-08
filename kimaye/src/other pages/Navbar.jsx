import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div
      style={{
        marginBottom: "10px",
        padding:"25px",
        background:"white",
        color: "white",
        fontSize: "20px",
        display: "flex",
        justifyContent:"center",
         gap:"20px",
        // boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        margin:" 20px auto",
        // marginLeft:"290px",
        width:"100%",
        // height:"55px",
        

      }}
    >
      <div>
        <Link to="/allfruits" style={{textDecoration:"none"}} >ALL FRUITS</Link>
      </div>
      <div>
        <Link to="/freshcuts" style={{textDecoration:"none"}}>FRESH CUTS</Link>
      </div>
      <div>
        <Link to="/fruitcombos" style={{textDecoration:"none"}}>FRUIT COMBOS</Link>
      </div>
      <div>
        <Link to="/gifts" style={{textDecoration:"none"}}>GIFT BY KIMAYE</Link>
      </div>
    </div>
  );
};

export default Navbar;

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
        gap:"20px",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        margin:"20px",
        marginLeft:"290px",
        width:"600px",
        height:"5px",
        textDecoration:"none"

      }}
    >
      <div>
        <Link to="/">ALL FRUITS</Link>
      </div>
      <div>
        <Link to="/login">FRESH CUTS</Link>
      </div>
      <div>
        <Link to="/about">FRUIT COMBOS</Link>
      </div>
      <div>
        <Link to="/nav">GIFT BY KIMAYE</Link>
      </div>
    </div>
  );
};

export default Navbar;

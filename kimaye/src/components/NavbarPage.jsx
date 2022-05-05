import React from 'react';
import styles from './styles/navbar.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Nav, Navbar, NavDropdown, NavLink} from 'react-bootstrap'


const dropdowns = {
    display : "flex",
    justifyContent: "space-between",
    padding: "10px 100px",
}


const NavbarPage = () => {

  return (

    <Navbar bg="myColor" variant='#EEEEEA' sticky='top' style={{...dropdowns}}>

        <Nav style={{gap: "30px", color:"black"}}>
            <NavDropdown title='SHOP'>
                <NavDropdown.Item href='shop'>ALL FRUITS</NavDropdown.Item>
                <NavDropdown.Item href='shop'>FRESH CUTS</NavDropdown.Item>
                <NavDropdown.Item href='shop'>FRUIT COMBOS</NavDropdown.Item>
                <NavDropdown.Item href='shop'>GIFTS BY KIMAYE</NavDropdown.Item>
                <NavDropdown.Item href='shop'>GRAPE FAMILY BY KIMAYE</NavDropdown.Item>
                <NavDropdown.Item href='shop'>RETURN AND REPLACEMENT</NavDropdown.Item>
                <NavDropdown.Item href='shop'>COMMUNITY BUYING</NavDropdown.Item>
            </NavDropdown>
            
            <NavDropdown title='LEARN'>
                <NavDropdown.Item href='learn'>OUR STORY</NavDropdown.Item>
                <NavDropdown.Item href='learn'>WHY KIMAYE</NavDropdown.Item>
                <NavDropdown.Item href='learn'>TRACEABILITY</NavDropdown.Item>
                <NavDropdown.Item href='learn'>BEYOND FRUITS</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href='grow'>GROW</Nav.Link>
        </Nav>
        
        <Nav>
            <NavLink href='home'>
                <img className="logo" href='home' src='https://cdn.shopify.com/s/files/1/0449/5225/6667/files/website-logo_400x.png?v=1596288204' />
            </NavLink>
            
        </Nav>

        <Nav style={{display:"flex", gap:"30px"}}>
            <NavLink>
                <i class="fa-solid fa-location-dot"></i>
            </NavLink>
            <NavLink>
                <i class="fa-solid fa-magnifying-glass"></i>
            </NavLink>
            <NavLink href='cart'>
                <i class="fa-solid fa-user"></i>
            </NavLink>
            <NavLink href='login'>
                <i class="fa-solid fa-bag-shopping"></i>
            </NavLink>
                
        </Nav>

        

    </Navbar>

    
  )
}

export default NavbarPage
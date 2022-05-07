import React from 'react';
import styles from './styles/navbar.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Nav, Navbar, NavDropdown, NavLink} from 'react-bootstrap'


const dropdowns = {
    display : "flex",
    justifyContent: "space-between",
    padding: "10px 100px",
    backgroundColor: "#EEEEEA"
}


const NavbarPage = () => {

  return (

    <Navbar bg="myColor" variant='#EEEEEA' sticky='top' style={{...dropdowns}}>

        <Nav style={{gap: "30px", color:"black"}}>
            <NavDropdown title='SHOP'>
                <NavDropdown.Item href='allfruits'>ALL FRUITS</NavDropdown.Item>
                <NavDropdown.Item href='freshcuts'>FRESH CUTS</NavDropdown.Item>
                <NavDropdown.Item href='fruitcombos'>FRUIT COMBOS</NavDropdown.Item>
                <NavDropdown.Item href='gifts'>GIFTS BY KIMAYE</NavDropdown.Item>
                <NavDropdown.Item href='shop'>GRAPE FAMILY BY KIMAYE</NavDropdown.Item>
                <NavDropdown.Item href='shop'>RETURN AND REPLACEMENT</NavDropdown.Item>
                <NavDropdown.Item href='shop'>COMMUNITY BUYING</NavDropdown.Item>
            </NavDropdown>
            
            <NavDropdown title='LEARN'>
                <NavDropdown.Item href='ourstory'>OUR STORY</NavDropdown.Item>
                <NavDropdown.Item href='whykimaye'>WHY KIMAYE</NavDropdown.Item>
                <NavDropdown.Item href='learn'>TRACEABILITY</NavDropdown.Item>
                <NavDropdown.Item href='learn'>BEYOND FRUITS</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href='grow'>GROW</Nav.Link>
        </Nav>
        
        <Nav>
            <NavLink href='home'>
                <img className={styles.logo} href='home' src='https://cdn.shopify.com/s/files/1/0449/5225/6667/files/website-logo_400x.png?v=1596288204' />
            </NavLink>
            
        </Nav>

        <Nav style={{display:"flex", gap:"30px"}}>
            <NavLink className={styles.icon}>
                <i class="fa-solid fa-location-dot"></i>
            </NavLink>
            <NavLink className={styles.icon}>
                <i class="fa-solid fa-magnifying-glass"></i>
            </NavLink>
            <NavLink href='lll' className={styles.icon}>
                <i class="fa-solid fa-user"></i>
            </NavLink>
            <NavLink href='cart' className={styles.icon}>
                <i class="fa-solid fa-bag-shopping"></i>
            </NavLink>
                
        </Nav>

        

    </Navbar>

    
  )
}

export default NavbarPage
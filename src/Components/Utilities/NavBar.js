import React from 'react'
import cart from "../../images/cart.png"
import login from "../../images/login.png"
import logo from "../../images/logo.png"
import {Navbar,Container,Form,Nav, NavLink} from "react-bootstrap"

const NavBarLogin = () => {
    return (
        <Navbar bg='dark' variant='dark' expand="lg" >
        <Container >
        <Navbar.Brand >
            <a href='/'> 
                <img src={logo} className='logo' alt=""></img>
            </a>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">

        <Form.Control  type="text"placeholder="ابـحـث..."className="me-2 ms-1  text-center w-100" aria-label='Search'/>
        
        <Nav className="me-auto ">

            <NavLink href='/login' className='nav-text position-relative d-flex mt-3 justify-content-center p-1'>
            <img src={login} className="login-img " alt="sfvs" />
            <p style={{ color: "white" }}>دخول</p>
            </NavLink>

            <NavLink href='/cart' className='nav-text position-relative d-flex mt-3 justify-content-center p-1'>
            <img src={cart} className="login-img" alt="sfvs" />
            <p style={{ color: "white" }}>العربه</p>
            </NavLink>

        </Nav>
        

        </Navbar.Collapse>
    </Container>
    </Navbar>
        
    )
}





export default NavBarLogin;

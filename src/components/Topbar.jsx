import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-scroll';
import Icon from './Icon';
import { useNavigate } from 'react-router-dom';

function Topbar() {
  let navigate = useNavigate()
  let handleStart=()=>{
    navigate("/dashboard")
  }
  return <>
  <div className='top_bar'>
  <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand ><Icon/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link></Nav.Link>
          </Nav>
          <Nav>
            <div className='Nav_list'>
              <Link to='/home' >Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Link to='/about'>About</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Link to='/reviews'>Reviews</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Link to='/contact'>Contact</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Link to='/dashboard' onClick={()=>{handleStart()}}>Login</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
  
  </>
}

export default Topbar
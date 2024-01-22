import React from 'react'
import Icon from '../Icon'
import { Link } from 'react-router-dom'

function Sidebar() {
  return <>
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                    {/* <!-- Sidebar - Brand --> */}
                    <a  style={{marginTop:"15px" , marginBottom:"15px"}} className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                        <div className="sidebar-brand-icon ">
                            <i className="fas fa-truck-fast"></i>
                        </div>
                        <div  className="sidebar-brand-text mx-3"><span style={{color:"red" , fontSize:"30px"}}>O</span>rders</div>
                    </a>

                    {/* <!-- Divider --> */}
                    <hr className="sidebar-divider my-3"/>

                    {/* <!-- Nav Item - Dashboard --> */}
                    <Link to="/home" className="nav-item active" style={{textDecoration:"none"}}>
                        <div className="nav-link" >
                            <i className="fas fa-fw fa-home"></i>
                            <span>Home</span></div>
                    </Link>
                    <Link to="/dashboard" className="nav-item active" style={{textDecoration:"none"}}>
                        <div className="nav-link" style={{border:"1px solid white" , boxShadow:"2px 2px 10px white" , textShadow:"1px 1px 5px black" , borderRadius:"10px"}} >
                            <i className="fas fa-fw fa-tachometer-alt"></i>
                            <span>Dashboard</span></div>
                    </Link>
                    <Link to="/order" className="nav-item active" style={{textDecoration:"none"}}>
                        <div className="nav-link" >
                            <i className="fas fa-fw fa-cart-shopping"></i>
                            <span>Orders</span></div>
                    </Link>
                    <Link to="/customer" className="nav-item active" style={{textDecoration:"none"}}>
                        <div className="nav-link" >
                            <i className="fas fa-fw fa-user"></i>
                            <span>Customers</span></div>
                    </Link>
                    <Link to="/order" className="nav-item active" style={{textDecoration:"none"}}>
                        <div className="nav-link" >
                            <i className="fas fa-fw fa-gear"></i>
                            <span>Settings</span></div>
                    </Link>

                    

    </ul>
  </>
}

export default Sidebar
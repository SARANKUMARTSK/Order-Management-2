import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import AddSalesOrder from './AddSalesOrder';


function AddOrders() {
let navigate = useNavigate();
  const handleHome=()=>{
    navigate("/home");
  }
  return <>
 <div className='add-customer_page'>
  <nav className='add-customer_nav'>
  <div><FontAwesomeIcon className='add-user_icon' icon={faUsers} /></div>
      <div className='flex'>
        <Link className='addOrderButton' to="sales-order" style={{textDecoration:"none" }}>Add Sales Order</Link> <br />
        <Link className='addOrderButton' to="purchase-order" style={{textDecoration:"none" }} >Add Purchase Order</Link>
        <Link className='addOrderButton' to="/home" style={{textDecoration:"none" }} >Home</Link>
        <Link className='addOrderButton' to="/dashboard" style={{textDecoration:"none" }} >Dashboard</Link>
      </div>
  </nav>
     <Outlet/>
 </div>
  </>
}

export default AddOrders
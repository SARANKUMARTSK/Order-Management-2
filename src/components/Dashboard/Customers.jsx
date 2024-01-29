import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import CustomerCard from './CustomerCard';
import { useState } from 'react';
import NavDashboard from './NavDashboard';
// import Button from 'react-bootstrap/Button';

function Customers({customer,setCustomer}) {
  return <>
  <Link to="/customer" style={{textDecoration:"none"}}>
    {/* <div className='customer_nav' >
    <h1 className='customer_heading' >Customer Details </h1>
    <div className='customer_buttons'>
       <Link style={{padding:"20px"}} to="/home"><Button variant="warning">Go To Home </Button></Link>
        <Link style={{padding:"20px"}} to="/dashboard"><Button variant="success">Go To Dashboard </Button></Link>
        <Link style={{padding:"20px"}} to="/add-customer"><Button variant="secondary">Add Customer </Button></Link>
    </div>
       
    </div> */}

     <NavDashboard/>
     <CustomerCard customer={customer} setCustomer={setCustomer}/>
  </Link>
  
  </>
}

export default Customers
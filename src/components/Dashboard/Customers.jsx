import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import CustomerCard from './CustomerCard';
import { useState } from 'react';
function Customers({customer,setCustomer}) {
  return <>
  <Link to="/customer" style={{textDecoration:"none"}}>
    <h1 style={{textAlign:"center" , color:"white" , textShadow:"2px 2px 10px orangered" , border:"1px solid black", boxShadow:"2px 2px 15px black", backgroundColor:"black" , padding:"15px"}}>Customer Details </h1>
     <CustomerCard customer={customer} setCustomer={setCustomer}/>
    <Link style={{padding:"20px"}} to="/home"><Button variant="warning">Go To Home </Button></Link>
    <Link style={{padding:"20px"}} to="/dashboard"><Button variant="success">Go To Dashboard </Button></Link>
    <Link style={{padding:"20px"}} to="/add-customer"><Button variant="secondary">Add Customer </Button></Link>
  </Link>
  
  </>
}

export default Customers
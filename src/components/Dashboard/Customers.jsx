import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import CustomerCard from './CustomerCard';
import { useState } from 'react';
import NavDashboard from './NavDashboard';


function Customers({customer,setCustomer}) {
  return <>
  <Link to="/customer" style={{textDecoration:"none"}}>
     <NavDashboard/>
     <CustomerCard customer={customer} setCustomer={setCustomer}/>
  </Link>
  
  </>
}

export default Customers
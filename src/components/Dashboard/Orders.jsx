import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

function Orders() {
    let [order,setOrder] = useState([])
    let getOrder = async()=>{
        try{
          let res = await axios.get("https://65a62c9d74cf4207b4ef648d.mockapi.io/Order")
          setOrder(res.data);
          
        }catch(error){
           console.log(error);
        }
    }

    useEffect(()=>{
        getOrder()
    },[])

  return <>
  <Link to="/order" style={{textDecoration:"none"}}>
     <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Customer ID</th>
          <th>Customer Name</th>
          <th>Product ID</th>
          <th>Product Name</th>
          <th>Product Price</th>
          <th>Order Number</th>
          <th>Customer Contact</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
       {
        order.map((e,i)=>{
            
            return <tr key={i}>
            <td>{e.id}</td>
            <td>{e.customerId}</td>
            <td>{e.customerName}</td>
            <th>{e.productId}</th>
            <th>{e.productName}</th>
            <th>{e.productPrice}</th>
            <th>{e.orderNumber}</th>
            <th>{e.customerContact}</th>
            <th>{e.status}</th>
          </tr>
        })  
       }
        
      </tbody>
    </Table>
    <Link style={{padding:"20px"}} to="/home"><Button variant="warning">Go To Home </Button></Link>
    <Link style={{padding:"20px"}} to="/dashboard"><Button variant="success">Go To Dashboard </Button></Link>

  </Link>
  </>
}

export default Orders
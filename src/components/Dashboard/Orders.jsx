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
    <div style={{boxShadow:"2px 2px 5px green" , width:"100%"}}>
       <h1 style={{color:"darkgreen" , fontFamily:"fantasy" , textAlign:'center' , textShadow:"1px 1px 1px black"}}> Orders</h1>
        <select style={{borderRadius:"10px" , width:"250px", height:"30px", margin:"10px"}}>
        <option value="">All</option>
          <option value="">Sales Order</option>
          <option value="">Purchase Order</option>
          <option value="">Packed</option>
          <option value="">Shipped</option>
          <option value="">Delivered</option>
          <option value="">Return</option>
          <option value="">Cancelled</option>
        </select>
        <Link style={{padding:"20px"}} to="/home"><Button variant="warning">Go To Home </Button></Link>
        <Link style={{padding:"20px"}} to="/dashboard"><Button variant="success">Go To Dashboard </Button></Link>
        <Link style={{padding:"20px"}} to="/add-order"><Button variant="info">Add Orders</Button></Link>
     </div>
    
     <Table striped bordered hover>
      <thead>
        <tr>
          <th style={{color:"white" , backgroundColor:"orangered",textShadow:"1px 2px 2px black", textAlign:"center"}}>ID</th>
          <th style={{color:"white" , backgroundColor:"orangered",textShadow:"1px 2px 2px black", textAlign:"center"}}>Customer ID</th>
          <th style={{color:"white" , backgroundColor:"orangered",textShadow:"1px 2px 2px black", textAlign:"center"}}>Customer Name</th>
          <th style={{color:"white" , backgroundColor:"orangered",textShadow:"1px 2px 2px black", textAlign:"center"}}>Product ID</th>
          <th style={{color:"white" , backgroundColor:"orangered",textShadow:"1px 2px 2px black", textAlign:"center"}}>Product Name</th>
          <th style={{color:"white" , backgroundColor:"orangered",textShadow:"1px 2px 2px black", textAlign:"center"}}>Product Price</th>
          <th style={{color:"white" , backgroundColor:"orangered",textShadow:"1px 2px 2px black", textAlign:"center"}}>Order Number</th>
          <th style={{color:"white" , backgroundColor:"orangered",textShadow:"1px 2px 2px black", textAlign:"center"}}>Customer Contact</th>
          <th style={{color:"white" , backgroundColor:"orangered",textShadow:"1px 2px 2px black", textAlign:"center"}}>Status</th>
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
    

  </Link>
  </>
}

export default Orders
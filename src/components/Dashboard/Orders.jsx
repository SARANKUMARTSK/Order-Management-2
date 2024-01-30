import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan,faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { API_URL } from '../../App';

function Orders() {
    let [order,setOrder] = useState([])
    let getOrder = async()=>{
        try{
          let res = await axios.get(API_URL)
          setOrder(res.data);
          
        }catch(error){
           console.log(error);
        }
    }

    useEffect(()=>{
        getOrder();
    },[])

    let handleDelete= async(order)=>{
      try{
        let res = await axios.delete(`${API_URL}/${order.id}`)
        getOrder();
      }catch(error){
         console.log(error);
      }
    }

    // const handleEdit=async(order)=>{
    //   console.log(order.id);
    //   navigate('add-sales-order');
    //   let res = await axios.get(`${API_URL}/${order.id}`);
    //   getOrder();
    //  }

    
    
  return <>
  <Link  style={{textDecoration:"none"}}>
    <div >
       <h1 style={{color:"darkgreen" , fontFamily:"fantasy" , textAlign:'center' , textShadow:"1px 1px 1px black"}}>Sales Orders</h1>
        <select style={{borderRadius:"10px" , width:"250px", height:"30px", margin:"10px"}}>
        <option value="">All</option>
          <option>Invoiced</option>
          <option>Packed</option>
          <option>Shipped</option>
          <option>Delivered</option>
          <option>Cancelled</option>
          <option>Returned</option>
        </select>
        <Link style={{padding:"20px"}} to="/home"><Button variant="warning">Go To Home </Button></Link>
        <Link style={{padding:"20px"}} to="/dashboard"><Button variant="success">Go To Dashboard </Button></Link>
        <Link style={{padding:"20px"}} to="/add-sales-order"><Button variant="info">Add Orders</Button></Link>
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
          <th style={{color:"white" , backgroundColor:"orangered",textShadow:"1px 2px 2px black", textAlign:"center"}}>Payment Type</th>
          <th style={{color:"white" , backgroundColor:"orangered",textShadow:"1px 2px 2px black", textAlign:"center"}}>Order Number</th>
          <th style={{color:"white" , backgroundColor:"orangered",textShadow:"1px 2px 2px black", textAlign:"center"}}>Customer Contact</th>
          <th style={{color:"white" , backgroundColor:"orangered",textShadow:"1px 2px 2px black", textAlign:"center"}}>Additional Contact</th>
          <th style={{color:"white" , backgroundColor:"orangered",textShadow:"1px 2px 2px black", textAlign:"center"}}>Order Date</th>
          <th style={{color:"white" , backgroundColor:"orangered",textShadow:"1px 2px 2px black", textAlign:"center"}}>Exp. Delivery</th>
          <th style={{color:"white" , backgroundColor:"orangered",textShadow:"1px 2px 2px black", textAlign:"center"}}>Tracking Code</th>
          <th style={{color:"white" , backgroundColor:"orangered",textShadow:"1px 2px 2px black", textAlign:"center"}}>Status</th>
          <th style={{color:"white" , backgroundColor:"orangered",textShadow:"1px 2px 2px black", textAlign:"center"}}>Action</th>
          
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
            <th><select className='addOrder_option' >
                <option>CashOn Delivery</option>
                <option>Online Payment</option>
              </select></th>
            <th>{e.orderNumber}</th>
            <th>{e.customerPhone}</th>
            <th>{e.customerAddPhone}</th>
            <th>{e.orderDate}</th>
            <th>{e.deliveryDate}</th>
            <th>{e.trackingId}</th>
            <th>
              <select className='addOrder_option'>
                <option >Invoiced</option>
                <option >Packed</option>
                <option >Shipped</option>
                <option >Delivered</option>
                <option >Cancelled</option>
                <option >Returned</option>
              </select>
            </th>
            <th>
              <FontAwesomeIcon onClick={()=>{handleDelete(e)}} className='deleteIcon' icon={faTrashCan} />&nbsp;&nbsp;&nbsp;
              <FontAwesomeIcon onClick={()=>{handleEdit(e)}} className='editIcon' icon={faPenToSquare} />
            </th>
            
          </tr>
        })  
       }
        
      </tbody>
    </Table>
    

  </Link>
  </>
}

export default Orders
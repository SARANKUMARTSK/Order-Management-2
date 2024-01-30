import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan,faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { API_URL2 } from '../../App';

function PurchaseOrder() {
    let [purchaseOrder,setPurchaseOrder] = useState([])
    let getPurchaseOrder = async()=>{
        try{
          let res = await axios.get(API_URL2)
          setPurchaseOrder(res.data);
          
          
        }catch(error){
           console.log(error);
        }
    }

    useEffect(()=>{
        getPurchaseOrder();
    },[])

    let handleDelete= async(order)=>{
      try{
        let res = await axios.delete(`${API_URL2}/${order.id}`)
        getPurchaseOrder();
      }catch(error){
         console.log(error);
      }
    }
  return <>
  <Link  style={{textDecoration:"none"}}>
    <div >
       <h1 style={{color:"darkgreen" , fontFamily:"fantasy" , textAlign:'center' , textShadow:"1px 1px 1px black"}}> Purchase Orders</h1>
        <Link style={{padding:"20px"}} to="/home"><Button variant="warning">Go To Home </Button></Link>
        <Link style={{padding:"20px"}} to="/dashboard"><Button variant="success">Go To Dashboard </Button></Link>
        <Link style={{padding:"20px"}} to="/add-purchase-order"><Button variant="info">Add Orders</Button></Link>
     </div>
    
     <Table striped bordered hover>
      <thead>
        <tr>
          <th style={{color:"white" , backgroundColor:"green",textShadow:"1px 2px 2px black", textAlign:"center"}}>ID</th>
          <th style={{color:"white" , backgroundColor:"green",textShadow:"1px 2px 2px black", textAlign:"center"}}>Seller Name</th>
          <th style={{color:"white" , backgroundColor:"green",textShadow:"1px 2px 2px black", textAlign:"center"}}>Company Name</th>
          <th style={{color:"white" , backgroundColor:"green",textShadow:"1px 2px 2px black", textAlign:"center"}}>Email Address</th>
          <th style={{color:"white" , backgroundColor:"green",textShadow:"1px 2px 2px black", textAlign:"center"}}>Phone Number</th>
          <th style={{color:"white" , backgroundColor:"green",textShadow:"1px 2px 2px black", textAlign:"center"}}>Additional Phone Number</th>
          <th style={{color:"white" , backgroundColor:"green",textShadow:"1px 2px 2px black", textAlign:"center"}}>Adress</th>
          <th style={{color:"white" , backgroundColor:"green",textShadow:"1px 2px 2px black", textAlign:"center"}}>Product Name</th>
          <th style={{color:"white" , backgroundColor:"green",textShadow:"1px 2px 2px black", textAlign:"center"}}>Product Details</th>
          <th style={{color:"white" , backgroundColor:"green",textShadow:"1px 2px 2px black", textAlign:"center"}}>Product Price</th>
          <th style={{color:"white" , backgroundColor:"green",textShadow:"1px 2px 2px black", textAlign:"center"}}>Order Date</th>
          <th style={{color:"white" , backgroundColor:"green",textShadow:"1px 2px 2px black", textAlign:"center"}}>Exp. Delivery</th>
          <th style={{color:"white" , backgroundColor:"green",textShadow:"1px 2px 2px black", textAlign:"center"}}>Action</th>
          
        </tr>
      </thead>
      <tbody>
       {
        purchaseOrder.map((e,i)=>{
            
            return <tr key={i}>
            <td>{e.id}</td>
            <td>{e.sellerName}</td>
            <th>{e.companyName}</th>
            <th>{e.email}</th>
            <th>{e.phoneNumber}</th>
            <th>{e.addPhoneNumber}</th>
            <th>{e.address}</th>
            <th>{e.productName}</th>
            <th>{e.description}</th>
            <th>{e.productPrice}</th>
            <th>{e.orderDate}</th>
            <th>{e.receivingDate}</th>
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

export default PurchaseOrder
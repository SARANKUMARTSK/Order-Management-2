import React, { useEffect, useState } from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Link, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { API_URL2 } from '../../App';
import { useNavigate } from 'react-router-dom';

function AddPurchaseOrder() {
  let navigate = useNavigate()
  let [sellerName,setSellerName] = useState();
  let [companyName,setCompanyName] = useState();
  let [email,setEmail] = useState();
  let [phoneNumber,setPhoneNumber] = useState();
  let [addPhoneNumber,setAddPhoneNumber] = useState();
  let [address,setAddress] = useState();
  let [productName,setProductName] = useState();
  let [description,setDescription] = useState();
  let [productPrice,setProductPrice] = useState();
  let [orderDate,setOrderDate] = useState();
  let [receivingDate,setReceivingDate] = useState();
  let [payment,setPayment] = useState();
  
 
   
  let handleSubmit = async()=>{
    if(!sellerName||!companyName||!email||!addPhoneNumber||!addPhoneNumber||!address||!productName||
      !description||!productPrice||!orderDate||!receivingDate||!payment){
        alert("Please Check & Fill All The Fields")
      }
      else{
        let res = await axios.post(API_URL2,{
          sellerName,
          companyName,
          email,
          phoneNumber,
          addPhoneNumber,
          address,
          productName,
          description ,
          productPrice,
          orderDate,
          receivingDate,
          payment
          })
          navigate("/purchase-order")
      }
    
  }

  return <>
  <Link to="/add-purchase-order" style={{textDecoration:"none" , color:"black"}}>
  <Form className='container-fluid purchase_order'>
                     <h3 style={{color:"grey", opacity:"0.2"}}>Purchase Order</h3>
      <Form.Group as={Row} className="mb-3" >
        <Form.Label column sm="2">Seller Name : </Form.Label>
        <Col sm="10"> <Form.Control type="text" placeholder="" value={sellerName} onChange={(e)=>{setSellerName(e.target.value)}} /></Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" >
         <Form.Label column sm="2">Company : </Form.Label>
        <Col sm="10"> <Form.Control type="text" placeholder="" value={companyName} onChange={(e)=>{setCompanyName(e.target.value)}} /></Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" >
        <Form.Label column sm="2">Email : </Form.Label>
        <Col sm="10"><Form.Control type="email" placeholder="" value={email} onChange={(e)=>{setEmail(e.target.value)}}/></Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" >
        <Form.Label column sm="2"> Phone Number : </Form.Label>
        <Col sm="10"><Form.Control type="text" placeholder="" value={phoneNumber} onChange={(e)=>{setPhoneNumber(e.target.value)}} /></Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" >
        <Form.Label column sm="2">Add. Phone Number : </Form.Label>
        <Col sm="10"><Form.Control type="text" placeholder="" value={addPhoneNumber} onChange={(e)=>{setAddPhoneNumber(e.target.value)}}/></Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" >
        <Form.Label column sm="2">Address : </Form.Label>
        <Col sm="10"><Form.Control type="text" placeholder="" value={address} onChange={(e)=>{setAddress(e.target.value)}} /></Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" >
        <Form.Label column sm="2">Product Name : </Form.Label>
        <Col sm="10"><Form.Control type="text" placeholder="" value={productName} onChange={(e)=>{setProductName(e.target.value)}} /></Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" >
        <Form.Label column sm="2">Product Details  : </Form.Label>
        <Col sm="10"><Form.Control type="text" placeholder="" value={description} onChange={(e)=>{setDescription(e.target.value)}} /></Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" >
        <Form.Label column sm="2">Product Price : </Form.Label>
        <Col sm="10"><Form.Control type="text" placeholder="" value={productPrice} onChange={(e)=>{setProductPrice(e.target.value)}} /></Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" >
        <Form.Label column sm="2">Order Date : </Form.Label>
        <Col sm="10"><Form.Control type="text" placeholder="" value={orderDate} onChange={(e)=>{setOrderDate(e.target.value)}}/></Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" >
        <Form.Label column sm="2">Receiving Date : </Form.Label>
        <Col sm="10"><Form.Control type="text" placeholder="" value={receivingDate} onChange={(e)=>{setReceivingDate(e.target.value)}}/></Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" >
        <Form.Label column sm="2">Payment Type  :</Form.Label>
        <Col sm="10">
        <select className='addOrder_option' onChange={(e)=>{setPayment(e.target.value)}} >
            <option value="Cash on Delivery">Paid</option>
            <option value="Online Payment">Pending</option>
          </select>
        </Col>
      </Form.Group>
     


      <Button variant='success' onClick={()=>{handleSubmit()}}>Submit</Button> &nbsp;
      <Button variant='warning' onClick={()=>{navigate('/purchase-order')}} >Back</Button>
      
    </Form> 
  </Link>
  
  </>
}

export default AddPurchaseOrder
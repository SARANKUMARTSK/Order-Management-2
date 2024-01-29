import React, { useEffect, useState } from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Link, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { API_URL } from '../../App';
import { useNavigate } from 'react-router-dom';

function AddSalesOrder() {
  let navigate = useNavigate()
  let [customerName,setCustomerName] = useState();
  let [customerEmail,setCustomerEmail] = useState();
  let [customerPhone,setCustomerPhone] = useState();
  let [customerAddPhone,setCustomerAddPhone] = useState();
  let [customerAddress,setCustomerAddress] = useState();
  let [productName,setProductName] = useState();
  let [productDescription,setProductDescription] = useState();
  let [productPrice,setProductPrice] = useState();
  let [orderDate,setOrderDate] = useState();
  let [deliveryDate,setDeliveryDate] = useState();
  let [deliveryCharge,setDeliveryCharge] = useState();
  let[paymentType,setPaymentType] = useState();
  let [status , setStatus] = useState();
 

  let handleSubmit = async()=>{
    let res = await axios.post(API_URL,{
    customerName,
    customerEmail,
    customerPhone,
    customerAddPhone,
    customerAddress,
    productName,
    productDescription,
    productPrice,
    orderDate,
    deliveryDate,
    deliveryCharge,
    paymentType,
    status
    })
    navigate("/order")
  }
  
  // useEffect(()=>{
  //   let fetchOrderDetails = async()=>{
  //     // console.log(id);
  //     try{
  //       let res = await axios.get(`${API_URL}/${id}`)
  //       console.log(res.data);
  //     }catch(error){
  //       console.log(error);
  //     }
  //   }
  // })
  return <>
  <Link  style={{textDecoration:"none" , color:"black"}}>
  <Form className='container-fluid sales_order'>
                     <h3 style={{color:"grey", opacity:"0.2"}}>Sales Order</h3>
      <Form.Group as={Row} className="mb-3" >
        <Form.Label column sm="2">Customer Name : </Form.Label>
        <Col sm="10"> <Form.Control type="text" placeholder="Full Name" value={customerName} onChange={(e)=>{setCustomerName(e.target.value)}} /></Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" >
         <Form.Label column sm="2">Email Adress : </Form.Label>
        <Col sm="10"> <Form.Control type="email" placeholder="mailid@gmail.com" value={customerEmail} onChange={(e)=>{setCustomerEmail(e.target.value)}} /></Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" >
        <Form.Label column sm="2">Phone : </Form.Label>
        <Col sm="10"><Form.Control type="text" placeholder="+91 - **********" value={customerPhone} onChange={(e)=>{setCustomerPhone(e.target.value)}}/></Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" >
        <Form.Label column sm="2">Additional Contact : </Form.Label>
        <Col sm="10"><Form.Control type="text" placeholder="+91 - **********" value={customerAddPhone} onChange={(e)=>{setCustomerAddPhone(e.target.value)}} /></Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" >
        <Form.Label column sm="2">Address : </Form.Label>
        <Col sm="10"><Form.Control type="text" placeholder="Door No. etc..." value={customerAddress} onChange={(e)=>{setCustomerAddress(e.target.value)}}/></Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" >
        <Form.Label column sm="2">Product Name : </Form.Label>
        <Col sm="10"><Form.Control type="text" placeholder="****" value={productName} onChange={(e)=>{setProductName(e.target.value)}} /></Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" >
        <Form.Label column sm="2">Product Description : </Form.Label>
        <Col sm="10"><Form.Control type="text" placeholder="Enter Here..." value={productDescription} onChange={(e)=>{setProductDescription(e.target.value)}} /></Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" >
        <Form.Label column sm="2">Product Price  : </Form.Label>
        <Col sm="10"><Form.Control type="text" placeholder="Rs. 0.00" value={productPrice} onChange={(e)=>{setProductPrice(e.target.value)}} /></Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" >
        <Form.Label column sm="2">Order Date : </Form.Label>
        <Col sm="10"><Form.Control type="text" placeholder="DD/MM/YYYY" value={orderDate} onChange={(e)=>{setOrderDate(e.target.value)}} /></Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" >
        <Form.Label column sm="2">Exp. Delivery : </Form.Label>
        <Col sm="10"><Form.Control type="text" placeholder="DD/MM/YYYY" value={deliveryDate} onChange={(e)=>{setDeliveryDate(e.target.value)}}/></Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" >
        <Form.Label column sm="2">Delivery Charge : </Form.Label>
        <Col sm="10"><Form.Control type="text" placeholder="Rs. 0.00" value={deliveryCharge} onChange={(e)=>{setDeliveryCharge(e.target.value)}}/></Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" >
        <Form.Label column sm="2">Payment Type  :</Form.Label>
        <Col sm="10">
        <select className='addOrder_option' onChange={(e)=>{setPaymentType(e.target.value)}} >
            <option value="Cash on Delivery">Cash on Delivery</option>
            <option value="Online Payment">Online Payment</option>
          </select>
        </Col>
      </Form.Group>
     
      <Form.Group as={Row} className="mb-3" >
        <Form.Label column sm="2">Current Status : </Form.Label>
        <Col sm="10">
          <select className='addOrder_option' value={status} onChange={(e)=>{setStatus(e.target.value)}} >
            <option value="Invoiced">Invoiced</option>
            <option value="Packed">Packed</option>
            <option value="Shipped">Shipped</option>
            <option value="Delivered">Delivered </option>
            <option value="Cancelled">Cancelled</option>
            <option value="Returned">Returned</option>
          </select> 
        </Col>
      </Form.Group>


      <Button variant='success' onClick={()=>{handleSubmit()}}>Submit</Button>

    </Form> 
  </Link>
  
  </>
}

export default AddSalesOrder
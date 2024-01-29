import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function AddPurchaseOrder() {
    let navigate = useNavigate()
  let [sellerName,setSellerName] = useState();
  let [sellerCompny,setSellerCompny]=useState();
  let [sellerEmail , setSellerEmail]=useState();
  let [sellerPhone,setSellerPhone]=useState();
  let [sellerAddPhone,setSellerAddPhone]=useState();
  let [productName,setProductName]=useState();
  let [productDescription,setProductDescription]=useState();
  let [productPrice,setProductPrice]=useState();
  let [orderDate,setOrderDate]=useState();
  let [deliveryDate,setDeliveryDate]=useState();
  let [paymentType,setPaymentType]=useState();

 

  let handleSubmit = async()=>{
    let res = await axios.post(API_URL,{
    sellerName,
    sellerCompny,
    sellerEmail,
    sellerPhone,
    sellerAddPhone,
    productName,
    productDescription,
    productPrice,
    orderDate,
    deliveryDate,
    paymentType
    })
    navigate("/order")
  }
  return <>
  <div>
   <Form className='container-fluid purchase_order' >
   <h3 style={{color:"grey", opacity:"0.2"}}>Purchase Order</h3>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Supplier Name</Form.Label>
        <Form.Control type="text" placeholder="" value={sellerName} onChange={(e)=>{setSellerName(e.target.value)}} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Supplier Company</Form.Label>
        <Form.Control type="text" placeholder="" value={sellerCompny} onChange={(e)=>{setSellerCompny(e.target.value)}} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="text" placeholder="example@gmail.com" value={sellerEmail} onChange={(e)=>{setSellerEmail(e.target.value)}}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Contact Number</Form.Label>
        <Form.Control type="text" placeholder="+91 __________" value={sellerPhone} onChange={(e)=>{setSellerPhone(e.target.value)}}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Additional Contact Number</Form.Label>
        <Form.Control type="text" placeholder="+91 __________" value={sellerAddPhone} onChange={(e)=>{setSellerAddPhone(e.target.value)}} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Product Name</Form.Label>
        <Form.Control type="text" placeholder="" value={productName} onChange={(e)=>{setProductName(e.target.value)}}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Product Details</Form.Label>
        <Form.Control as="textarea" rows={3} value={productDescription} onChange={(e)=>{setProductDescription(e.target.value)}}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Product Price</Form.Label>
        <Form.Control type="text" placeholder="" value={productPrice} onChange={(e)=>{setProductPrice(e.target.value)}}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Order Date</Form.Label>
        <Form.Control type="text" placeholder="" value={orderDate} onChange={(e)=>{setOrderDate(e.target.value)}} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Expected Receiving Date </Form.Label>
        <Form.Control type="text" placeholder="" value={deliveryDate} onChange={(e)=>{setDeliveryDate(e.target.value)}}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Payment Type  : </Form.Label>&nbsp;&nbsp;
        <select className='addOrder_option' value={paymentType} onChange={(e)=>{setPaymentType(e.target.value)}}>
            <option>Paid</option>
            <option>Pending</option>
        </select>
      </Form.Group>
      <Button variant='success' onClick={()=>{handleSubmit()}}>Submit</Button>
    </Form>
    
  </div>
  </>
}

export default AddPurchaseOrder
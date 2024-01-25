import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function AddOrders() {
let navigate = useNavigate();
  const handleHome=()=>{
    navigate("/home");
  }
  return <>
 <div className='add-customer_page'>
  <nav className='add-customer_nav'>
  <div><FontAwesomeIcon className='add-user_icon' icon={faUsers} /></div>
  <div className='add_customer_navigate'>
  <Link style={{padding:"20px"}} to="/home"><Button variant="warning">Go To Home </Button></Link>
  <Link style={{padding:"20px"}} to="/dashboard"><Button variant="success">Go To Dashboard </Button></Link>
  </div>
 
  </nav>
  <Form className='container-fluid'>

      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm="2">Name : </Form.Label>
        <Col sm="10"> <Form.Control type="text" placeholder="Full Name" /></Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" >
         <Form.Label column sm="2">Email Adress : </Form.Label>
        <Col sm="10"> <Form.Control type="email" placeholder="mailid@gmail.com" /></Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" >
        <Form.Label column sm="2">Contact : </Form.Label>
        <Col sm="10"><Form.Control type="text" placeholder="+91 - **********" /></Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" >
        <Form.Label column sm="2">Adress : </Form.Label>
        <Col sm="10"><Form.Control type="text" placeholder="Door No. etc..." /></Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" >
        <Form.Label column sm="2">Product Name : </Form.Label>
        <Col sm="10"><Form.Control type="text" placeholder="****" /></Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" >
        <Form.Label column sm="2">Product Description : </Form.Label>
        <Col sm="10"><Form.Control type="text" placeholder="Enter Here..." /></Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" >
        <Form.Label column sm="2">Delivery Adress : </Form.Label>
        <Col sm="10"><Form.Control type="text" placeholder="Door No. etc..." /></Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" >
        <Form.Label column sm="2">Product Price  : </Form.Label>
        <Col sm="10"><Form.Control type="text" placeholder="$0.00" /></Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" >
        <Form.Label column sm="2">Order Type  : </Form.Label>
        <Col sm="10"><Form.Control type="text" placeholder="Purchase / Sales" /> </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" >
        <Form.Label column sm="2">Payment Type  :</Form.Label>
        <Col sm="10">
        <select className='addOrder_option' >
            <option>Cash on Delivery</option>
            <option>Online Payment</option>
          </select>
        </Col>
      </Form.Group>
     
      <Form.Group as={Row} className="mb-3" >
        <Form.Label column sm="2">Current Status : </Form.Label>
        <Col sm="10">
          <select className='addOrder_option' >
            <option>Invoiced</option>
            <option>Packed</option>
            <option>Shipped</option>
            <option>Delivered</option>
            <option>Cancelled</option>
            <option>Returned</option>
          </select> 
        </Col>
      </Form.Group>


      <Button variant='success'>Submit</Button>

    </Form>
 </div>
  </>
}

export default AddOrders
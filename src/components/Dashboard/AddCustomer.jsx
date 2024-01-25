import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function AddCustomer() {
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

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Name : 
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text" placeholder="Full Name" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Email Adress : 
        </Form.Label>
        <Col sm="10">
          <Form.Control type="email" placeholder="yourmail@gmail.com" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Contact : 
        </Form.Label>
        <Col sm="10">
          <Form.Control type="email" placeholder="+91 - **********" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Adress : 
        </Form.Label>
        <Col sm="10">
          <Form.Control type="email" placeholder="Door No. etc..." />
        </Col>
      </Form.Group>
      <Button variant='success'>Submit</Button>

    </Form>
 </div>
  </>
}

export default AddCustomer
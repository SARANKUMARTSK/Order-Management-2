import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CustomerCard() {

    const [customer,setCustomer] = useState([])
    const getCustomer = async()=>{
        try{
            let res = await axios.get("https://65a62c9d74cf4207b4ef648d.mockapi.io/Order");
            setCustomer(res.data)

        }catch(error){
            console.log(error);
        }
    }
    useEffect(()=>{
       getCustomer()
    },[])
  return <>
  <div id="content-wrapper" style={{display:"flex" , flexWrap:"wrap", justifyContent:"space-around"}} >
    {
        customer.map((e,i)=>{
            
            return <Card   key={i} style={{ width: '18rem' }}>
               
                            <Card.Img variant="top" src={e.customerImage}/>
                            <Card.Body >
                                <Card.Title><span style={{fontWeight:"bold"}}>Supplier Name :</span>  {e.supplierName}</Card.Title>
                                <Card.Title><span style={{fontWeight:"bold"}}>Custer Name :</span>  {e.customerName}</Card.Title>
                                <Card.Text><span style={{fontWeight:"bold"}}>ID :</span> {e.customerId} </Card.Text>
                                <Card.Text><span style={{fontWeight:"bold"}}>Contact :</span> {e.customerContact} </Card.Text>
                                <Card.Text><span style={{fontWeight:"bold"}}>Address :</span> {e.customerAddress} </Card.Text>
                                <Button style={{textAlign:"center" , alignItems:"center"}} variant="warning">Edit</Button>&nbsp;&nbsp;
                                <Button style={{textAlign:"center" , alignItems:"center"}} variant="danger">Delete</Button>
                            </Card.Body>
                   </Card>
        })
    }
    
  </div>
  </>
}

export default CustomerCard
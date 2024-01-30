import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function DealerCard() {

    const [dealer,setDealer] = useState([])
    const getCustomer = async()=>{
        try{
            let res = await axios.get("https://65a62c9d74cf4207b4ef648d.mockapi.io/purchase");
            setDealer(res.data)

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
        dealer.map((e,i)=>{
            
            return <Card   key={i} style={{ width: '18rem' }}>
               
                            <Card.Img variant="top" src={e.image}/>
                            <Card.Body >
                                <Card.Title><span style={{fontWeight:"bold"}}>Seller Name:</span>  {e.sellerName}</Card.Title>
                                <Card.Text><span style={{fontWeight:"bold"}}>Company :</span> {e.companyName} </Card.Text>
                                <Card.Text><span style={{fontWeight:"bold"}}>Email :</span> {e.email} </Card.Text>
                                <Card.Text><span style={{fontWeight:"bold"}}>Phone Number :</span> {e.phoneNumber} </Card.Text>
                                <Card.Text><span style={{fontWeight:"bold"}}>Additional Phone Number :</span> {e.addPhoneNumber} </Card.Text>
                                <Card.Text><span style={{fontWeight:"bold"}}>Address :</span> {e.address} </Card.Text>
                                {/* <Button style={{textAlign:"center" , alignItems:"center"}} variant="warning">Edit</Button>&nbsp;&nbsp;
                                <Button style={{textAlign:"center" , alignItems:"center"}} variant="danger">Delete</Button> */}
                            </Card.Body>
                   </Card>
        })
    }
    
  </div>
  </>
}

export default DealerCard
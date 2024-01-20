import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function About() {

  let[about,setAbout] = useState([
    {
      image : "https://www.zoho.com/inventory/order-management-software/images/multi-channel-sales-order-management-system.svg",
      title : "Centralize multi-channel sales",
      content : " Integrate with Amazon, eBay, Etsy, and Shopify and manage all of your online orders in a single platform. Set a reorder point and get updates on your stock level to avoid out-of-stock situations."
    },
    {
      image : "https://www.zoho.com/inventory/order-management-software/images/shipping-integration-order-management-software.svg",
      title : "Simplify packing and shipping",
      content : " Create packages, print package slips and get real-time shipping rates for 30 different shipping services. You can do all of this and more from a single order management system."
    },
    {
      image : "https://www.zoho.com/inventory/order-management-software/images/tracking-shipments-order-management-system.svg",
      title : "Track shipments",
      content : "Monitor the movement of packages after shipment and keep your customers updated on their locations. Create more satisfied customers with this order management system."
    },
    {
      image : "https://www.zoho.com/inventory/order-management-software/images/online-payments-order-management-software.svg",
      title : "Collect payments online",
      content : " Set up and integrate your payment account to start receiving online payments right away. Switch to an easy, secure, and convenient mode of accepting payments from your customers."
    },
    {
      image : "https://www.zoho.com/inventory/order-management-software/images/generating-reports-order-management-software.svg",
      title : "Manage orders efficiently",
      content : " Identify your most profitable item, or monitor purchasing and sales order trends to make informed decisions and stay ahead of your competitors."
    },
    {
      image : "https://www.zoho.com/inventory/order-management-software/images/managing-orders-order-management-system.svg",
      title : "Manage orders efficiently",
      content : "With drop shipment and back ordering in Order Express, create purchase order direclty from a sales order or have your manufacturer ship the goods directly to the customer so the order is not delayed."
    }
  ])
  return <>
  <div className='about_page'>
   
   {
    about.map((e,i)=>{ 
      return <Card key={i} style={{ width: '18rem', border:"none" }}>
      <Card.Img variant="top" style={{height:"80px", width:"80px"}} src={e.image}/>
      <Card.Body>
        <Card.Title>{e.title}</Card.Title>
        <Card.Text>
          {e.content}
        </Card.Text>
      </Card.Body>
    </Card>
    })
   } 
  </div>
  </>
}

export default About
import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Feedback() {
  let [testimonial,setTestimonial] = useState(
    [
        {
            name : "Mr.Robert De Niro",
            command : "Thank you for putting together such a great product."
        },
        {
            name : "James Stewart",
            command : "he whole team was a huge help with putting things together for our company and brand."
        },
        {
            name : "Marlon Brando",
            command : " We loved working with you and the whole team, and we will be recommending you to others!"
        },
        {
            name : "Toshirô Mifune",
            command : " We will be hiring them again in the near future for additional work!"
        }
    ]
  )
  let [name,setName] = useState("")
  let [command,setCommand] = useState("")
  const handleSubmit=()=>{
    if(!name||!command){
        alert("Please Fill All The Fields")
    }else{
      let newArray = [...testimonial]
    newArray.push({
        name : name ,
        command : command 
    })
    setTestimonial(newArray);
    alert("Thank You For Your Valuable Command")
    setName("");
    setCommand("");

    }
    
    
  }
  return <>
  <div className='testimonial_container'>
    <div>
      <h1>Customer Testimonials</h1>
      <div className='grid_container'>
      {
       testimonial.map((e,i)=>{
         return <div key={i} className='testimonial'>
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ3pIejCfvaLOYLpZoNbYW4XAnfeb4YRg0RessjUzM3YO8OgSEBGV-mazpr01AXsVaBPw&usqp=CAU" alt="" />
         <div className='message_container'>
             <h5>{e.name}</h5>
             <p>{e.command}</p>
         </div>
     </div>
       })
      }
      </div>
     
        
    </div>
    <div>
        <br />  
        <h3>Give Your Valuable Feedback Here...</h3> 
        <div className='feedback_form'>
            <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Name :</Form.Label>
                <Form.Control value={name} onChange={(e)=>{setName(e.target.value)}} type="email" placeholder="Enter Your Full Name ..." />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Comments :</Form.Label>
                <Form.Control value={command} onChange={(e)=>{setCommand(e.target.value)}} as="textarea" rows={3} />
            </Form.Group>
            <Button onClick={()=>{handleSubmit()}} style={{fontWeight:"bold" , margin:"30px"}} variant="success">Submit</Button>
            </Form> 
       </div>
    </div>
  </div>

  </>
}

export default Feedback
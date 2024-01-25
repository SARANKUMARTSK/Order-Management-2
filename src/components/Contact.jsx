import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope ,faPhone} from '@fortawesome/free-solid-svg-icons'

function Contact() {
  return <>
  <div style={{textAlign:"center" , padding:"20px"}} className='contact_container'>
   <div  className='mail_container'>
    <h6><span><FontAwesomeIcon icon={faEnvelope} /> :</span>  sarankumartsk@gmail.com </h6>
    <h6><span><FontAwesomeIcon icon={faPhone} /> :</span> 8675750594</h6>
   </div>
   <div className='social_media_container' style={{padding:"10px" , display:"flex" , justifyContent:"center" , gap:"20px" , color:"white !important" , fontSize:"40px"}}>
    <a href="https://www.linkedin.com/in/saran-kumar-17563a250/" target='blank' rel='noopener noreferrer'><i className="fa-brands fa-linkedin"></i></a>
    <a href="https://github.com/SARANKUMARTSK"><i className="fa-brands fa-github"></i></a>
    <a href="https://www.facebook.com/profile.php?id=100009111732920"><i className="fa-brands fa-facebook"></i></a>
    <a href="https://www.instagram.com/_charan_tsk_/"><i className="fa-brands fa-instagram"></i></a>
   </div>
  </div>
  </>
}

export default Contact
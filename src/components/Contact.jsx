import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope ,faPhone} from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faGithub, faInstagramSquare, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

function Contact() {
  return <>
  <div style={{textAlign:"center" , padding:"20px"}} className='contact_container'>
   <div  className='mail_container'>
    <h6><span><FontAwesomeIcon icon={faEnvelope} /> :</span>  sarankumartsk@gmail.com </h6>
    <h6><span><FontAwesomeIcon icon={faPhone} /> :</span> 8675750594</h6>
   </div>
   <div className='social_media_container'  >
        <a style={{color:"white"}} href="https://github.com/SARANKUMARTSK"><FontAwesomeIcon icon={faGithub} /></a>
        <a href="https://www.linkedin.com/in/saran-kumar-17563a250/"><FontAwesomeIcon icon={faLinkedinIn}  /></a>
        <a style={{color:"darkmagenta"}} href="https://www.instagram.com/_charan_tsk_/"><FontAwesomeIcon icon={faInstagramSquare}  /></a>
        <a href="https://www.facebook.com/profile.php?id=100009111732920"><FontAwesomeIcon icon={faFacebookSquare}  /></a>
   </div>
  </div>
  </>
}

export default Contact
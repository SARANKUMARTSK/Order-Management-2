import React from 'react'
import Icon from './Icon'
import About from './About'
import Feedback from './Feedback'
import { Link } from 'react-scroll'
import Contact from './Contact'
import { useNavigate } from 'react-router-dom'
function Home() {
  let navigate = useNavigate()
  let handleStart=()=>{
    navigate("/dashboard")
  }
  return <>
  <Link id='/home'>
  <div className='home_page'>
      <h1><span>Welcome to ...</span><Icon/></h1>
      <h2>This is Simple Order Management Software Site</h2>
      <p>Manage sales and purchase orders, create packages and shipments, and send delivery updates through a single order management system.
      </p> 
      <button onClick={()=>{handleStart()}} className='getStarted_button'>Get Started</button>&nbsp;&nbsp;&nbsp;
      {/* <button className='learn_button'>Learn More</button> */}
  </div>
  </Link>
  
  <Link id='/about'><About/></Link>
  <Link id='/reviews'><Feedback /></Link>
  <Link id='/contact'><Contact /></Link>
  </>
}

export default Home
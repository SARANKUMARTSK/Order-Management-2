import React from 'react'
import { Link } from 'react-router-dom'
function Dashboard() {
  return <>
  <Link to="/dashboard" style={{textDecoration:"none" , textAlign:"center"}}>
  <h1>This is Dashboard</h1>
  <p>I Need To Edit This Page ... Wait for Updates As soon As Possible</p>
  </Link>
  
  </>
}

export default Dashboard
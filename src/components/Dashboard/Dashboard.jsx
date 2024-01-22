import React from 'react'
import "./Dashboard.css"
import Sidebar from './Sidebar'
import { Link, NavLink } from 'react-router-dom'
import Cards from './Cards'
function Dashboard() {
  return <>
   <Link to="/dashboard" style={{textDecoration:"none" , textAlign:"center"}}>
   <div id="wrapper">
      <Sidebar/>
      <div id="content-wrapper" className="d-flex flex-column">
             <div id="content">
                 <div className="container-fluid">
                            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                            </div> 
                 </div>
                 <div className='container-fluid'>
                  <Cards/>
                 </div>
                 
             </div>
      </div>
   </div>
   </Link>



  {/* <div id="wrapper">
   <Sidebar/>
    
  </div> */}
  </>
}

export default Dashboard
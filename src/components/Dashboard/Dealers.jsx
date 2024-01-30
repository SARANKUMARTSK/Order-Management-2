import React from 'react'
import { Link } from 'react-router-dom'
import DealerCard from './DealerCard';
import NavDashboard from './NavDashboard';


function Dealers({dealer,setDealer}) {
  return <>
  <Link to="/dealer" style={{textDecoration:"none"}}>
     <NavDashboard/>
     <DealerCard dealer={dealer} setDealer={setDealer}/>
  </Link>
  
  </>
}

export default Dealers
import React from 'react'
import Topbar from './components/Topbar'
import Home from './components/Home'
import About from './components/About'
import Login from './components/Login'
import { Route,Routes,BrowserRouter,Navigate } from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard'
import Orders from './components/Dashboard/Orders'
import Customers from './components/Dashboard/Customers'
import AddCustomer from './components/Dashboard/AddCustomer'
import Settings from './components/Dashboard/Settings'
import AddSalesOrder from './components/Dashboard/AddSalesOrder'
import AddPurchaseOrder from './components/Dashboard/AddPurchaseOrder'
import PurchaseOrder from './components/Dashboard/PurchaseOrder'
import Dealers from './components/Dashboard/Dealers'
export const API_URL = "https://65a62c9d74cf4207b4ef648d.mockapi.io/order"
export const API_URL2 = "https://65a62c9d74cf4207b4ef648d.mockapi.io/purchase"

function App() {
  return <>
  <BrowserRouter>
  <Routes>
    <Route path='/home' element={<><Topbar/><Home/></>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='/sales-order' element={<Orders/>}></Route>
    <Route path='/customer' element={<Customers/>}></Route>
    <Route path='/add-customer' element={<AddCustomer/>}/>
    <Route path='/add-sales-order/' element={<AddSalesOrder/>}></Route>
    <Route path='/purchase-order' element={<PurchaseOrder/>}></Route>
    <Route path='/add-purchase-order' element={<AddPurchaseOrder/>}></Route> 
    <Route path='/dealer' element={<Dealers/>}></Route>
          {/* <Route path='add-sales-order' element={<AddSalesOrder/>}></Route>
          <Route path='purchase-order' element={<AddPurchaseOrder/>}></Route> */}
    
    <Route path='/settings' element={<Settings />} />
    <Route path='*' element={<Navigate to='home'/>} ></Route>
    
  </Routes>
  </BrowserRouter>
  
  </>
}

export default App
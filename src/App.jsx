import React from 'react'
import Topbar from './components/Topbar'
import Home from './components/Home'
import About from './components/About'
import Login from './components/Login'
import { Route,Routes,BrowserRouter,Navigate } from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard'
import Orders from './components/Dashboard/Orders'
import Sidebar from './components/Dashboard/Sidebar'
import Customers from './components/Dashboard/Customers'
import AddCustomer from './components/Dashboard/AddCustomer'
import AddOrders from './components/Dashboard/AddOrders'
import Settings from './components/Dashboard/Settings'
import AddSalesOrder from './components/Dashboard/AddSalesOrder'
import AddPurchaseOrder from './components/Dashboard/AddPurchaseOrder'
export const API_URL = "https://65a62c9d74cf4207b4ef648d.mockapi.io/order"

function App() {
  return <>
  <BrowserRouter>
  <Routes>
    <Route path='/home' element={<><Topbar/><Home/></>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='/order' element={<Orders/>}></Route>
    <Route path='/customer' element={<Customers/>}></Route>
    <Route path='/add-customer' element={<AddCustomer/>}/>
    <Route path='/add-order' element={<AddOrders/>}>
          <Route path='sales-order' element={<AddSalesOrder/>}></Route>
          <Route path='purchase-order' element={<AddPurchaseOrder/>}></Route>
    </Route>
    <Route path='settings' element={<Settings />} />
    <Route path='*' element={<Navigate to='home'/>} ></Route>
    
  </Routes>
  </BrowserRouter>
  
  </>
}

export default App
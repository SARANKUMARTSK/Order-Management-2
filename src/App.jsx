import React from 'react'
import Topbar from './components/Topbar'
import Home from './components/Home'
import About from './components/About'
import Login from './components/Login'
import { Route,Routes,BrowserRouter,Navigate } from 'react-router-dom'
import Dashboard from './components/Dashboard'

function App() {
  return <>
  <BrowserRouter>
  <Routes>
    <Route path='/home' element={<><Topbar/><Home/></>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='*' element={<Navigate to='home'/>} ></Route>
    
  </Routes>
  </BrowserRouter>
  
  </>
}

export default App
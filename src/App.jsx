import React from 'react'
import Topbar from './components/Topbar'
import Home from './components/Home'
import About from './components/About'
import Login from './components/Login'
import { Route,Routes,BrowserRouter } from 'react-router-dom'

function App() {
  return <>
  <Topbar/>
  <Home/>
  {/* <Login/> */}
  </>
}

export default App
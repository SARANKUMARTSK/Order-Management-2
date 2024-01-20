import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruckFast } from '@fortawesome/free-solid-svg-icons'
function Icon() {
  return <>
  <div className='brand_logo'>
    <i className='icon_logo'><FontAwesomeIcon icon={faTruckFast} /></i>&nbsp;
    <span className='brand_name'><span>O</span>rder Express</span>
  </div>
  
  </>
}

export default Icon
import React from 'react'
import ServiceCom from './ServicesCom'
import ServicesPhone from "./ServicesPhone"
import './display.css'
function FinalService() {
  return (
    <>
      <div className={'desktopOnly'}>
        <ServiceCom />
      </div>

      <div className={'mobileOnly'}>
        <ServicesPhone />
      </div>
    </>
  )
}

export default FinalService
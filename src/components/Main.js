
import React from 'react'
import '../CSS/main.css'
import Destacado from './Destacado'
import FotoFullName from './FotoFullName'
import Lateral from './Lateral'
import Logo from './Logo'

export default function Main() {
  return (
    <div className='main'>

        <div className='mainLogoContainer'>
            <div className='mainLogo'>
                <Logo/>
            </div>
        </div>

        <div className='marco'>
            <Lateral/>
            <FotoFullName/>
        </div>
        
        <Destacado/>
        
        <div className='decorativo'></div>

    </div>
  )
}

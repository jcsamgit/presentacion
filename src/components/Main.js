
import React from 'react'
import '../CSS/main.css'
import Destacado from './Destacado'
import Lateral from './Lateral'
import Logo from './Logo'

export default function Main() {
  return (
    <div className='main'>
        <div className='marco'>
            <Lateral/>
            
            <div className='marco2'>
                <div className='contenedorFoto'>

                </div>
                <div className='fullName'>
                    <p>NOMBRE NOMBRE</p>
                    <p>APELLIDO APELLIDO</p>
                </div>
                
            </div>

        </div>
        
        <div className='mainLogo'>
            <Logo/>
        </div>
        <Destacado/>

    </div>
  )
}

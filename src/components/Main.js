
import React from 'react'
import '../CSS/main.css'
import Destacado from './Destacado'
import Logo from './Logo'

export default function Main() {
  return (
    <div className='main'>
        <div className='marco'></div>
        <div className='marco2'></div>
        <Logo/>
        <div className='contenedorFoto'></div>
        <div className='fullName'>
            <p>NOMBRE NOMBRE</p>
            <p>APELLIDO APELLIDO</p>
        </div>
        <div className='contenidoLateral'>
            <h4>Perfil</h4>
            <p>Creativo, responsable y autodidactico. Muy bueno con los algoritmos, las matemáticas y la tecnologia; destacando la inteligencia lógica y analítica.</p>
            <h4>Contacto</h4>
            <p>Telefono: 1132585929</p>
            <p>Email: jcv.gerald@gmail.com</p>
            <h4>Aficiones</h4>
            <ul>
                <li>Desarmar, reparar y armar aparatos</li>
                <li>Juegos de estrategias como el ajedrez</li>
                <li>Conducir mi auto</li>
                <li>Crear macros con jitbit</li>
            </ul>
        </div>
        <Destacado/>
        
    </div>
  )
}

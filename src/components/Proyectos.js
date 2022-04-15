import React from 'react'

export default function Proyectos(props) {
  let dinamico= {display:props.activar}
  return (
    <div className='concepto proyectos' style={dinamico}>
        <h3>PROYECTOS</h3>
        <li>Tienda online con React Js</li>
        <li>Simulador de plazo fijo</li>
        <li>Catologo online</li>
        <li>Tateti con Python</li>
        <li>Simulador de dados con Python</li>
    </div>
  )
}

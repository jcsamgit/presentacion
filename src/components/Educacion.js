import React from 'react'

export default function Educacion(props) {
    let dinamico= {display:props.activar}
  return (
        <div className='concepto educacion' style={dinamico}>
            <h3>EDUCACION</h3>
            {/* <h3>{props.activar}</h3> */}
            <h4>Coderhouse</h4>
            <ul>Desarollador Front End (septiembre 2021):
                <li>React Js (junio-septiembre)</li>
                <li>JavaScript (mayo-junio)</li>
                <li>Desarrollo Web (febrero-mayo)</li>
            </ul>
            <h4>Universidad Austral</h4>
            <ul>Agosto 2020 - Diciembre 2020
                <li>Manejo de base de datos con Python</li>
                <li>Programación orientada a objetos con Python</li>
                <li>Estructuras de datos en Python</li>
                <li>Introducción a la programación con Python</li>
            </ul>
            <h4> Universidad Nacional de San Martin</h4>
            <ul>Febrero de 2012-agosto de 2014 (incompleto)
                <li>Ingenieria Industrial</li>
            </ul>

        </div>
  )
}

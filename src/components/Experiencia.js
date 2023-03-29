import React from 'react'

export default function Experiencia(props) {
  let dinamico= {display:props.activar}
  return (
    <>
      <div className='concepto experiencia' style={dinamico}>
            <h3>EXPERIENCIA LABORAL</h3>
            <br/>
            <h4>Freelance (2022-actualidad)</h4>
            <br/>
            <h4>Chofer de remis (2013-actualidad)</h4>
            <br/>
            <h4>Profesor particular (2012-2020)</h4>
            <ul>
                <li>Matemáticas todos los niveles hasta cbc</li>
            </ul>
      </div>
    </>
  )
}

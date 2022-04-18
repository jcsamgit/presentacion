import React from 'react'

export default function Proyectos(props) {
  let dinamico= {display:props.activar}
  return (
    <div className='concepto proyectos' style={dinamico}>
        <h3>PROYECTOS</h3>
        <li>Tienda online con React Js
          <a href='https://jcsamgit.github.io/bikes/'>Ver mas...</a>
          </li>
        <li>Simulador de plazo fijo 
          <a href='https://jcsamgit.github.io/Simulador-de-plazo-fijo/'>Ver mas...</a>
        </li>
        <li>Catologo online
          <a href='https://jcsamgit.github.io/Proyecto-bikes.html/'>Ver mas...</a>
        </li>
        <li>Tateti con Python
          <a href='https://github.com/jcsamgit/simuladores/blob/main/TATETI.py'>Ver mas...</a>
        </li>
        <li>Simulador de dados con Python
            <a href='https://github.com/jcsamgit/simuladores/blob/main/Simulador%20de%20dados.py'>Ver mas...</a>
        </li>
    </div>
  )
}

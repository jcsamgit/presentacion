import React, { useEffect, useState, useRef } from 'react'
import Aptitudes from './Aptitudes'
import Educacion from './Educacion'
import Experiencia from './Experiencia'
import Logo from './Logo'
import Proyectos from './Proyectos'

export default function Destacado() {
    const[mostrar, setMostrar]=useState("Educación")
    let array=["Educación", "Aptitudes", "Proyectos", "Experiencia"]

    const enfoque = useRef(null);
  
    useEffect(() => {
      // Establece el foco en el div cuando se carga la página
      enfoque.current.focus();
    }, []);
  return (
    <div className='destacado'>

        <div className='itemLogoContainer'>
            {
                array.map((item, index) =>
                <button
                    key={item.toString()}
                    id={item}
                    className='itemLogo'
                    onClick={() => setMostrar(item)}
                    ref={index === 0 ? enfoque : null} // referencia solo el primer botón
                >
                    <p className='parrafoLogo'>{item}</p>
                    <div className='logoContainer'>
                    <Logo />
                    </div>
                </button>
                )
            }
        </div>


        <div className='contenedorConceptos'>
            {mostrar=="Educación"?<Educacion/>: false}
            {mostrar=="Aptitudes"?<Aptitudes/>:false}
            {mostrar=="Proyectos"?<Proyectos/>:false}
            {mostrar=="Experiencia"?<Experiencia/>:false}
        </div>
    </div>
  )
}

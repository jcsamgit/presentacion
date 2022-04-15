import React, { useEffect, useState } from 'react'
import Aptitudes from './Aptitudes'
import Educacion from './Educacion'
import Experiencia from './Experiencia'
import Logo from './Logo'
import Proyectos from './Proyectos'

export default function Destacado() {
    const[mostrar, setMostrar]=useState("")
    let array=["Educación", "Aptitudes", "Proyectos", "Experiencia"]
    // console.log("mostrar",mostrar)
  return (
    <div className='destacado'>

        <div className='itemLogoContainer'>
            {
            array.map(item=>

                <div key={item.toString()} className='itemLogo' onClick={()=> setMostrar(item)}>
                    <p className='parrafoLogo' id={item}>{item}</p>

                    <Logo/>
                </div>
            )}
        </div>

        <div className='contenedorConceptos'>
            {mostrar=="Educación"?<Educacion/>: false}
            {mostrar=="Aptitudes"?<Aptitudes/>:null}
            {mostrar=="Proyectos"?<Proyectos/>:null}
            {mostrar=="Experiencia"?<Experiencia/>:null}
        </div>
    </div>
  )
}

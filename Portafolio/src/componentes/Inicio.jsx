// eslint-disable-next-line no-unused-vars
import React from 'react'
import '../App.css';
import { NavLink } from "react-router-dom"

export const Inicio = () => {
  return (
    <div>
      <h2>Hola, soy <span className='resaltado'>Eudys Mora</span>, soy Ingeniero de Sistemas y Desarrollador Web, y ofrezco mis servicios de <span className='resaltado'>programación y desarrollo</span> en todo tipo de proyectos Web.</h2>
      <h6>Te ayudo a crear tu sitio o aplicación web.</h6>
      <NavLink to="/contacto" className='boton-contacta'>Contacta conmigo</NavLink>
    </div>
  )
}

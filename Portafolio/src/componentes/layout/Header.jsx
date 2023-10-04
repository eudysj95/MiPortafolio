// eslint-disable-next-line no-unused-vars
import React from 'react'
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <div className='header'>
      <span className='logo'>E</span>
      <h1> <span>Eudys</span><br /><span>Mora</span> </h1>
      <ul className='nav'>
        <li>
          <NavLink to="/inicio">Inicio</NavLink>
        </li>
        <li>
        <NavLink to="/portafolio">Portafolio</NavLink>
        </li>
        <li>
        <NavLink to="/curriculum">Curriculum</NavLink>
        </li>
        <li>
        <NavLink to="/contacto">Contacto</NavLink>
        </li>
      </ul>
    </div>
  )
}

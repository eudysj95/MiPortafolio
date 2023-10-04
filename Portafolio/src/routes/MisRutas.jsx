// eslint-disable-next-line no-unused-vars
import React from 'react'
// eslint-disable-next-line no-unused-vars
import { Routes, Route, BrowserRouter, NavLink} from 'react-router-dom';
import { Inicio } from '../componentes/Inicio';
import { Portafolio } from '../componentes/Portafolio';
import { Curriculum } from '../componentes/Curriculum';
import { Contacto } from '../componentes/Contacto';
import { Header } from '../componentes/layout/Header'
import { Footer } from '../componentes/layout/Footer'

export const MisRutas = () => {
  return (
    <BrowserRouter>
      {/* HEADER Y NAVEGACION */}
        <Header />

      {/* CONTENIDO CENTRAL */}
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/inicio' element={<Inicio />} />
          <Route path='/portafolio' element={<Portafolio />} />
          
          <Route path='/curriculum' element={<Curriculum />} />
          <Route path='/contacto' element={<Contacto />} />
        </Routes>

      {/* FOOTER */}
        <Footer />


    </BrowserRouter>
  );
}

// eslint-disable-next-line no-unused-vars
import React from 'react'
import img from '../img/img';

export const Portafolio = () => {
  return (

    <>
      <h2>Portafolio</h2>
      
      <div className='proyectos'>

        <div className="proyecto">
          <img src={img.banderas}/>
          <h4>Proyecto sobre banderas</h4>
          <p>Proyecto sobre banderas</p>
        </div>

        <div className="proyecto">
          <img src={img.calculator}/>
          <h4>Proyecto sobre calculadora</h4>
          <p>Proyecto sobre calculadora</p>
        </div>

        <div className="proyecto">
          <img src={img.form}/>
          <h4>Proyecto sobre formulario</h4>
          <p>Proyecto sobre formulario</p>
        </div>

        <div className="proyecto">
          <img src={img.vitoco}/>
          <h4>Proyecto sobre carta</h4>
          <p>Proyecto sobre carta</p>
        </div>
      </div>
    </>
    
    
  )
}

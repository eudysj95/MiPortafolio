// eslint-disable-next-line no-unused-vars
import React from 'react'

export const Contacto = () => {
  return (
    <div>
      <h2>Contacto</h2>
      <form className='formulario'>
        <input type="text" placeholder='Nombres' name='nombres' />
        <input type="text" placeholder='Apellidos' name='apelidos' />
        <input type="text" placeholder='Empresa' name='empresa' />
        <input type="text" placeholder='Email' name='email' />
        <textarea name="descripcion" id="descripcion" placeholder='Motivo de contacto'></textarea>
        <input type="submit" name="submit" value="Enviar"/>
      </form>
    </div>
  )
}

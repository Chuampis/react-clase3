import React from 'react'
import './App.css'
import Form from './components/Form/Form'

const App = () => {
  let nombre ="Chuampis"
  return (
    <div>
      <h1>Hola, soy {nombre}</h1>
      <h2 style={{color:"red"}}>Bienvenidos a la tienda</h2>
      <p className='parrafo'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure assumenda eveniet sequi vitae hic perspiciatis iusto tempore quisquam ducimus quod repellendus, culpa quidem aliquid minima delectus explicabo quas ut quam? Quae totam atque libero odit officiis tenetur impedit quidem! Fugit!</p>
      <img src="http://placekitten.com/200/300" alt="" />
      {
        /* Este es un comentario */
      }
      <Form/> 
      </div>
   )
}

export default App
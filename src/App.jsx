import React from 'react'
import virgen from './assets/virgendelvalle.png'
import './App.css'

function App() {

  return (
    <div>
      <div className='body-content'>
        <div className='portada'>
          <img src={virgen} alt="virgen" className='imgvirgen'></img>
          <h1>Virgen del Valle de La Reducción</h1>
        </div>
        <div className='section'>
          <a className='item-section-text' href='#lahistoria'>La Historia del Hallazgo</a>
          <a className='item-section-text' href='#museo'>Museo Virtual</a>
          <a className='item-section-text' href='#santuario'>La misión en el Santuario</a>
          <a className='item-section-text' href='#fiesta'>Fiesta del 8 de Diciembre</a>
        </div>
      </div>
      <section className='body-content' id='lahistoria'>
        <h2>La Historia del Hallazgo</h2>
      </section>
      <section className='body-content' id='museo'>
        <h2>Museo Virtual</h2>
      </section>
      <section className='body-content' id='santuario'>
        <h2>La misión en el Santuario</h2>
      </section>
      <section className='body-content' id='fiesta'>
        <h2>Fiesta del 8 de Diciembre</h2>
      </section>
      <div className='footer'>

      </div>
    </div>
  )
}

export default App

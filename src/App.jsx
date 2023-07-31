import React from 'react'
import virgen from './assets/virgendelvalle.png'
import './App.css'

function App() {

  return (
    <div>
      <div className='portada'>
      <img src={virgen} alt="virgen" className='imgvirgen'></img>
      <h1>Virgen del Valle de La Reducción</h1>
      </div>
      <div className='section'>
        <div className='item-section-text'><a>La Historia del Hallazgo</a></div>
        <div className='item-section-text'><a>Museo Virtual</a></div>
        <div className='item-section-text'><a>La misión en el Santuario</a></div>
        <div className='item-section-text'><a>Fiesta del 8 de Diciembre</a></div>
      </div>
      {/* <div className='cards-container'>
        <div className='card'><a>La Historia del Hallazgo</a></div>
        <div className='card'><a>La Historia del Hallazgo</a></div>
        <div className='card'><a>La Historia del Hallazgo</a></div>
      </div>
      <div className='cards-container'>
        <div className='card'><a>La Historia del Hallazgo</a></div>
        <div className='card'><a>La Historia del Hallazgo</a></div>
        <div className='card'><a>La Historia del Hallazgo</a></div>
      </div>
      <div className='cards-container'>
        <div className='card'><a>La Historia del Hallazgo</a></div>
        <div className='card'><a>La Historia del Hallazgo</a></div>
        <div className='card'><a>La Historia del Hallazgo</a></div>
      </div> */}
    </div>
  )
}

export default App

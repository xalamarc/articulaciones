import React from 'react'
import Spline from '@splinetool/react-spline'

const App = () => {
  return (
    <div>
      <Spline scene='https://prod.spline.design/zZzHDAAxRRG2wAYg/scene.splinecode' />
      <div className='container'>
        <h1 className='text'>Tipos de articulaciones sinoviales</h1>
        <div className='child'>
          <h3>Esferoidea</h3>
          <p>Ejemplos:</p>
          <ul>
            <li>Articulación glenohumeral </li>
            <li>Articulación esternoclavicular</li>
            <li>Articulación coxal </li>
          </ul>
        </div>
        <div className='child'>
          <h3>En bisagra </h3>
          <p>Ejemplos:</p>
          <ul>
            <li>Articulación humerocubital </li>
            <li>Articulación temporomandibular</li>
          </ul>
        </div>
        <div className='child'>
          <h3>Pivote </h3>
          <p>Ejemplos:</p>
          <ul>
            <li>Articulación atlantoaxial</li>
            <li>Articulación radiocubital</li>
          </ul>
        </div>
        <div className='child'>
          <h3>Deslizante </h3>
          <p>Ejemplos:</p>
          <ul>
            <li>Articulación intercarpiana</li>
            <li>Articulaciones intertarsianas </li>
          </ul>
        </div>
        <div className='child'>
          <h3>Condílea o elipsoidea </h3>
          <p>Ejemplos:</p>
          <ul>
            <li>Articulación atlantooccipital </li>
            <li>Articulaciones radiocarpianas </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App

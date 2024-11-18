import React from 'react'
import './App.css'
import AmbiguousCase from './Components/AmbiguousCase'
import HeronsFormula from './Components/HeronsFormula'
import NewtonsMethod from './Components/NewtonsMethod'
import PolynomialFunction from './Components/PolynomialFunction'

function App() {
  return (
    <div className="container">
      <HeronsFormula />
      <AmbiguousCase />
      <NewtonsMethod />
      <PolynomialFunction />
    </div>
  )
}

export default App

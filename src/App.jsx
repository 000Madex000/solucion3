import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Character from './componentes/Character'
import axios from 'axios';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Character/>
      
    </div>
  )
}

export default App

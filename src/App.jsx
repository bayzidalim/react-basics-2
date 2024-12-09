import { useState } from 'react'
import './App.css'
import Posts from './Post'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h3>React Core Concepts</h3>
      <ol>
        <li>Components</li>
        <li>JSX</li>
        <li>Props</li>
        <li>State</li>
        <li>Event Handler</li>
        <li>Load Data</li>
      </ol>
      <Posts></Posts>
    </>
  )
}

export default App

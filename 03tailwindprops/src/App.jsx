import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='bg-amber-100 text-black p-4 rounded-xl mb-3'>Tailwind Test</h1>
     <Card username = "Tailwind and React With Chai"/>
     <Card username = "Discrete mathematics"/>
    </>
  )
}

export default App

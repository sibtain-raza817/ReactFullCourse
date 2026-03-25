import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-center bg-green-400 text-black p-4 rounded mt-6'>Hello Jaan</h1>
    </>
  )
}

export default App

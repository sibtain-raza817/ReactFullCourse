import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-center bg-green-400 text-black p-4 rounded mt-6 mb-6 font-bold'>Welcome to my website</h1>
    <div className="min-h-screen bg-gray-900 flex flex-wrap gap-8 justify-center p-4">
      <Card username="Raza" myBtn="Visit Profile" />
      <Card username="Ali" myBtn="Follow" />
      <Card username="Ahmed" myBtn="Connect" />
      </div>
    </>
  )
}

export default App

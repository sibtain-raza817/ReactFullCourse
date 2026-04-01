import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { useCallback } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)
  const [Password, setPassword] = useState("")

  const passwordGenerator = useCallback(()=>{
    let str = "ABCDEFGJIJKLMNOPQRSTUVWXYZabcdefgjijklmnopqrstuvwxyz";
    let pass = ""

    if(numberAllowed) str += "0123456789";
    if(characterAllowed) str += "!@$%^&*-_=[]{}~`";


    for (let i = 1; i <= array.length; i++) {
      let char = Math.floor(Math.random() * str.length + 1); // we expend 1 for not take 0

      pass = str.charAt(char);
      
    }

    setPassword(pass)





  },[length, numberAllowed, characterAllowed, setPassword])

  return (
    <>
      <h1 className='text-white text-center text-4xl'>Password Generator</h1>
    </>
  )
}

export default App

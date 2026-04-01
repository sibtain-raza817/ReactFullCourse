import { useEffect, useState } from 'react'

import './App.css'
import TimeComponent from './components/TimeComponent';

function App() {
  // const [count, setCount] = useState(0)
  // const [total, setTotal] = useState(1)

  //somthing which is imp
  //first -> side-effect function
  //second -> Clean-Up function
  //Third ->Comma separate dependency list


  //Some variance in useEffect

  //1. Run on every render
  // useEffect(()=>{
  //   alert("I will run on each render!");
  // })

  //2. Runs only once after first render
  // useEffect(()=>{
  //      alert("I will run only first render!");
  // }, [])


  //3. Runs when count changes
  // useEffect(()=>{
  //   alert("I will run every time when count is updated") // it will work after count update but before render
  // },[count])

  //4. Multiple dependencies

  // useEffect(()=>{
  //   alert("I will run every time when count/total is updated")
  // },[count, total])

  //5. 
  //Handle the counts funtions
  function handleClick(){
    setCount(count+1);
  }

  function handleTotal(){
    setTotal(total+1);
  }
  return (
    <>
    {/* <TimeComponent /> */}
    {/* <p>count is : {count}</p>
      <button onClick={handleClick}>Click count</button>
    <p>totai is : {total}</p>
      <button onClick={handleTotal}>Click total</button> */}
    </>
  )
}

export default App

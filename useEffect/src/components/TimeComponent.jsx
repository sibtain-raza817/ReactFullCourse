import React, { useEffect, useState } from 'react'

const TimeComponent = () => {
    const[second, setSecond] = useState(0);

    useEffect(()=>{
        const intervalId = setInterval(()=>{
            console.log("setInterval Executed");
            setSecond(preSecond => preSecond+1);
            
        }, 1000)

        return ()=>{
            console.log("Time to stop");
            clearInterval(intervalId)
        }
    },[]) // it will only in first render
  return (
    <div>
      <h1>Seconds: {second}</h1>
    </div>
  )
}

export default TimeComponent

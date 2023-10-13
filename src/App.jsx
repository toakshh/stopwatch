import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [timer,setTimer]= useState(55);
  const [isRunning,setIsRunning]= useState(false)

  useEffect(()=>{
    let inTimer;
    if(isRunning){
      inTimer= setInterval(()=>{
        setTimer(prevVal=>(prevVal+1));
      }, 1000)
    }else{
      clearInterval(inTimer)
    }

    return ()=> clearInterval(inTimer);
  },[isRunning])

  const handleStart= ()=>{
    setIsRunning(!isRunning)
  }
  const handleReset= ()=>{
    setTimer(0)
    setIsRunning(false)
  }
  const formatTime= (sec)=>{
    let min= Math.floor(sec/60);
    let seconds= sec%60;
    return `${min}:${seconds}`
  }
  return (
    <div className='app'>
    <h1>Stopwatch</h1>
    <div>
      <h4>Time : {formatTime(timer)}</h4>
      <div className='btnDiv'>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
    </div>
  )
}

export default App

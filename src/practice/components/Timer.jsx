import React, { useRef } from "react";
import { useState } from "react";

function Timer(){
      const [hours, setHours] = useState(0)
      const [minutes, setMinutes] = useState(0)
      const [seconds, setSeconds] = useState(0)
    
      const timerRef = useRef(null)
    
      const timer = () => {
        if (timerRef.current) return   // prevent multiple intervals
    
        timerRef.current = setInterval(() => {
          setSeconds(prevSeconds => {
            if (prevSeconds >= 59) {
              setMinutes(prevMinutes => {
                if (prevMinutes >= 59) {
                  setHours(prevHours => prevHours + 1)
                  return 0
                }
                return prevMinutes + 1
              })
              return 0
            }
            return prevSeconds + 1
          })
        }, 1000)
      }
    
      const reset = () => {
        clearInterval(timerRef.current)
        timerRef.current = null
        setHours(0)
        setMinutes(0)
        setSeconds(0)
      }
    
      return (
        <>
          <h1>{hours}:{minutes}:{seconds}</h1>
          <button onClick={timer}>Start</button>
          <button onClick={reset}>Reset</button>
        </>
      )
}

export default Timer;
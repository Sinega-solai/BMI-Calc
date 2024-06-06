import React, { useState } from 'react'
import"./Advice.css"

const Advice = () => {
    const[Advice, setAdvice]=useState("CLICK THE BUTTON TO GET ADVICE")
    const[value, setValue]=useState(0)
    async function handleAdvice(){
        const result=await fetch("https://api.adviceslip.com/advice")
        const data= await result.json()
        setAdvice(data.slip.advice);
        setValue((u)=> value+1)
         }
  return (
    <>
    <h1>{Advice}</h1>
    <button onClick={handleAdvice}>GET ADVICE</button>
    <Counter value={value}/>
    </>
  )
    function Counter(props){
        return(
         <p> YOU HAVE READ <b>({props.value})</b> PIECE OF ADVICE</p>
        )
    }
}

export default Advice
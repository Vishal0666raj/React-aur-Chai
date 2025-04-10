import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [Counter,setCounter] = useState(15);
  // let Counter = 15;

  const doIt = ()=>{
     console.log("clicked",Math.random());

     setCounter((prevCounter)=>prevCounter + 1 );
     setCounter((prevCounter)=>prevCounter + 1 );
     setCounter((prevCounter)=>prevCounter + 1 );
     setCounter((prevCounter)=>prevCounter + 1 );

  }

  const removeIt = ()=>{
     setCounter(Counter -1);
     
  }

  const IncFunc = ()=>{
       if(Counter<40){
        doIt();
       }
  }

  const decFunc = ()=>{
    if(Counter>0){
      removeIt();
    }
  }

  return (
    <>
      <h1>Chai Aur React | {Counter}</h1>
      <button onClick={IncFunc}>Increase {Counter}</button>
      <br />
      <button onClick={decFunc}>Decrease {Counter}</button>
      <p>{Counter}</p>
    </>
  )
}

export default App

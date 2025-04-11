import { useState } from 'react'


function App() {
  const [color,setColor] = useState("aqua");
  

  

  return (
     <div className="h-screen w-full duration-200" style={{backgroundColor: color}}>
         <div className="w-[80vw] h-[4em] bg-amber-100 rounded-3xl flex items-center gap-16 justify-center  " >
          <button onClick={()=>setColor("red")} className="h-[70%] mx-3 rounded-2xl" style={{backgroundColor : "red"}} >Red</button>
          <button className="h-[70%] mx-3 rounded-2xl" style={{backgroundColor : "yellow"}} onClick={()=>setColor("yellow")}>Yellow</button>
          <button className="h-[70%] mx-3 rounded-2xl" style={{backgroundColor : "green"}} onClick={()=>setColor("green")}>Green</button>
          <button className="h-[70%] mx-3 rounded-2xl" style={{backgroundColor : "gray"}} onClick={()=>setColor("gray")}>gray</button>
          <button className="h-[70%] mx-3 rounded-2xl" style={{backgroundColor : "orange"}} onClick={()=>setColor("orange")}>Orange</button>
         </div>
     </div>
  )
}

export default App

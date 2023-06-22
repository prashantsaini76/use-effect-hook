import React, { useEffect, useState } from "react";

function App() {

const[counter,setCounter] = useState(0); 
const[data,setData] = useState(10); 


  useEffect(() => {

   console.log("data");
   
  },[counter])

 
  return (
    <div className="App">

      <h1>Count :: {counter}</h1>
      <h1>Data :: {data}</h1>
      <button onClick={()=> setCounter(counter+1)}>Update Counter</button>
      <button onClick={()=> setData(data+1)}>Update Data</button>
    
    </div>
  );
}

export default App;

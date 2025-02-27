import { useEffect, useState } from 'react'
import './App.css'
import Watch from './Watch'

function App() {
  const [watches,setWatches] = useState([]);
  useEffect(()=>{
    fetch('watches.json')
    .then(res=>res.json())
    .then(data=>setWatches(data))
  },[])
  
  // const watches = [
  //   { id: 1, name: "Apple Watch", price: 399 },
  //   { id: 2, name: "Samsung Watch", price: 349 },
  //   { id: 3, name: "MI Watch", price: 199 },
  //   { id: 4, name: "Garmin Watch", price: 299 },
  //   { id: 5, name: "Fitbit Watch", price: 249 }
  // ];
  
  

  return (
    <>
      <h1>Vite + React</h1>
      {
        watches.map(watch=><Watch key={watch.id} watch={watch}></Watch>)
      }
    </>
  )
}

export default App

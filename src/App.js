import React,{useState, useEffect} from "react";
import "./App.css";
import axios from 'axios'
import { BASE_URL, API_KEY } from "./Components/Links";

import Info from './Components/Info'
import Image from './Components/Image'

function App() {
const [nasa, setNasa] = useState([])
const [info, setInfo] = useState(null)

const openImage = ()=>{

}
const closeImage = ()=>{
  
}
useEffect(()=>{
  axios.get(`${BASE_URL}/planetary/apod?api_key=${API_KEY}`)
  .then(res=>{
    console.log(res.data)
  })
  .catch(err=>{
   console.log(err) 
  })
  .finally(()=>{

  })
},[])

  return (
    <h1>Astronomy Picture of the Day</h1>
    <h2>Discover the cosmos! Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer.</h2>
    <div className='App-container'>
    <div className="App">
      <Image />
    </div>
    <div className="Info">
      <Info />
    </div>
    </div>
  );
}

export default App;

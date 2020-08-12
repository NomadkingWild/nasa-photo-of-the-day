import React,{useState, useEffect} from "react";
import "../App.css";
import axios from 'axios'
import { BASE_URL, API_KEY } from "../Components/Links";

function Info() {
    const[info, setInfo] = useState()
    // const [open, setImage] = useState(null)
    
    const openImage = ()=>{
    
    }
    const closeImage = ()=>{
      
    }
    useEffect(()=>{
      axios.get(`${BASE_URL}/planetary/apod?api_key=${API_KEY}`)
      .then(res=>{
        setInfo(res.data.explanation)
      })
      .catch(err=>{
       console.log(err) 
      })
      .finally(()=>{
    
      })
    },[])
    
      return (
        <div class = "explain">
            <p>{info}</p>
        </div>
      );
    }
    
    export default Info;
    
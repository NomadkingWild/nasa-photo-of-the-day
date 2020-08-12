import React,{useState, useEffect} from "react";
import "../App.css";
import axios from 'axios'
import { BASE_URL, API_KEY } from "../Components/Links";

 function Image() {
    const[image, setImage] = useState()
    const[date,setDate]=useState()
    // const [open, setImage] = useState(null)
    
    const openImage = ()=>{
    
    }
    const closeImage = ()=>{
      
    }
    useEffect(()=>{
      axios.get(`${BASE_URL}/planetary/apod?api_key=${API_KEY}`)
      .then(res=>{
        setImage(res.data.url)
      })
      .catch(err=>{
       console.log(err) 
      })
      .finally(()=>{
    
      })
    },[])
    useEffect(()=>{
        axios.get(`${BASE_URL}/planetary/apod?api_key=${API_KEY}`)
        .then(res=>{
          setDate(res.data.date)
        })
        .catch(err=>{
         console.log(err) 
        })
        .finally(()=>{
      
        })
      },[])
    
      return (
          <p>{date}</p>
        <img src={image} alt='logo'></img>
      );
    }
    
    export default Image;
    
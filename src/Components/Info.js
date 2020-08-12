import React,{useState, useEffect} from "react";
import "../App.css";
import axios from 'axios'
import { BASE_URL, API_KEY } from "../Components/Links";

function Info() {
    const[info, setInfo] = useState()
    const[title,setTitle] = useState()
    const[author,setAuthor] = useState()
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

    useEffect(()=>{
        axios.get(`${BASE_URL}/planetary/apod?api_key=${API_KEY}`)
        .then(res=>{
          setTitle(res.data.title)
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
          setAuthor(res.data.copyright)
        })
        .catch(err=>{
         console.log(err) 
        })
        .finally(()=>{
      
        })
      },[])
    
      return (
        <div class = "explain">
            <h1>{title}</h1>
            <h2>Copyright: {author}</h2>
            <p>{info}</p>
        </div>
      );
    }
    
    export default Info;
    
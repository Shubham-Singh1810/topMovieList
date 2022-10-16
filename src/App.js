import './App.css';
import axios from "axios"
import {useEffect, useState} from "react"
import Card from './component/Card';

const App = ()=>{
  const [movie, setMovie] = useState([])
  const API = "https://shubham-singh1810.github.io/movieList/data.json"
  useEffect(()=>{
    getItem();
  },[])
  const getItem= async()=>{
    try {
      let response = await axios.get(API)
      setMovie(response.data)
      console.log(movie)
    } catch (error) {
      console.log(error)
    }
  }
  return(
     <div>
      <h1 style={{textAlign:"center", padding:"5px", background:"black", color:"whitesmoke"}}>Top Movie List</h1>
      <div className="listItem">
      {
        movie.map((v, i)=>{
           return (
            <Card v={v} key={i}></Card>
           ) 
      })
      }
      </div>
     </div>
  )
}


export default App;

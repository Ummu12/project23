import React ,{useEffect,useState}from "react";
import axios from "axios";
import {Card,CardContent,Grid} from "@mui/material"

export const Home=()=>{
    const[data,setData]=useState([])
    const getData= async () =>{
        const result= await axios.get("https://jsonplaceholder.typicode.com/posts/1/comments")
        console.log(result.data)
        setData(result.data)
    }   
    
    useEffect(()=>{
      getData()
    },[])
    
    
    return(
        <Grid container spacing={2}>
          
                  <Grid item xs={12} sx={{textAlign:"center"}}>
                  <h1>API Fetch</h1>
                  </Grid>
                  {
                    data.map(item=>
                    <Grid item xs={6}>
                      <Card sx={{bgcolor:"aqua"}}>
                         <CardContent>
                           <h1 style={{ color:"red"}}> ID -{item.id}</h1> 
                           <h2>Name -{item.name}</h2>
                           <h2> Email -{item.email}</h2>
                                {item.body}
                         </CardContent>
                      </Card>
                    </Grid>
                        )
                  }
            
        </Grid>
    )
}
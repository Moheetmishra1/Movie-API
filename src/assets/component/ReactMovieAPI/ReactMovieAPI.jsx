import React, { useEffect , useState } from "react";
import axios from 'axios';
import MovieBox from "./MovieBox";
import '../../CSS/ReactMovieAPI.css'




export default function ReactMovieAPI(){  

    let [users,setUsers] = useState([])
    let [movie,setMovie] = useState("Pirates")
    let [check,setCheck] = useState({loading:"none", found:"none"}) 
 
    function updateMovie({target:{value}}){ 
        setCheck({...check,loading:"block"})
        setMovie(value);
            
    }   

    let fetechApi =async ()=>{ 

        try{
            let data = await fetch( `http://www.omdbapi.com/?s=${movie.trim()}&apikey=e10f97be`) 
            let {Search} = await data.json()           
            data=[]
        if(Search){
            Search= Search.sort((a,b)=>{
                return b.Year - a.Year 
            })
            for(let i=0;i<Search.length;++i){

            let obj2 = await fetch(`http://www.omdbapi.com/?&t=${Search[i].Title}&apikey=e10f97be`)
            obj2 = await obj2.json()           
            if(obj2.Title){   data.push(obj2)     }        
        }        
        setUsers(data)        
         }
        }catch(err){
            console.log("The error ",err);
        }
        setCheck({...check,loading:"none"})     
    }

    useEffect(()=>{  
        console.log(movie);     
        fetechApi()
    }, [movie] );    

let fetchSearchButton = async ()=>{     
    setCheck({...check,loading:"block"})
    try{
        let data = await fetch(`https://www.omdbapi.com/?t=${movie.trim()}&apikey=e10f97be`);
        data = await data.json();
        if(data.Title){
        setUsers([data]);
        setCheck({...check,loading:"none"})

        }else{
            setUsers([])
            setCheck({...check,found:"block",loading:"none"})
           
          }
   
    }catch(err){
        console.log("The Error is ",err);
        setCheck({...check,found:"block"})

    }
    setCheck({...check,loading:"none"})
   
}

// useEffect(()=>{
//     if(check.Search){
//     fetchSearchButton()
//     }
// })
console.log(users);

    return (
        <>
        <div className="mainMovieList">
        <div className="searchTools">
            <input type="text" onChange={updateMovie} />
            <button onClick={fetchSearchButton }>Search</button>
        </div>
        <h1 className="loading" style={{display:`${check.loading}`}}  >Loading...{movie}</h1>
        <h1 className="loading" style={{display:`${check.found}`}} >Movie not found</h1>
        
        <div className="movieList">

            {users.map(({Title,Year,Rated,Released,Runtime,Genre,Actors,Poster,Country,Language},index)=>{

                    return <div key={index} >
                        <MovieBox  title={Title} year={Year} Released={Released} runtime={Runtime} genre={Genre} actors={Actors} poster={Poster} rated={Rated} country={Country} language={Language} />

                        </div>
                })
            }
        </div>
        </div>
        </>
        
    )
}
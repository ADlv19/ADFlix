import React, { useState , useEffect} from "react";
import instance from './axios';

function Row({title, fetchUrl}){

    const [movies, setMovies] = useState([])

    useEffect(()=>{

    }, []);
 
    return(
        <div>
            <h2> { title } </h2>
        </div>
    )
}
 
export default Row;
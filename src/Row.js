import React, { useState , useEffect} from "react";
import axios from './axios';
import "./Row.css"

const POSTER_URL = "https://image.tmdb.org/t/p/original/";

function Row({title, fetchUrl}){

    const [movies, setMovies] = useState([]);

    useEffect( ()=> {
        async function fetchData(){
            const requests = await axios.get(fetchUrl);
            setMovies(requests.data.results)
            console.log(requests);
            return requests;
        }
        fetchData();
    }, [fetchUrl]);

    console.table(movies);
 
    return(
        <div>
            <h2> { title } </h2>
            <div className="row__posters">
                {movies.map(movie => (
                    <img 
                        key = {movie.id}
                        className="row__poster" 
                        src={`${POSTER_URL}${movie.poster_path}`}
                        alt={movie.name} />
                        
                ))}
            </div>
        </div>
    )
}
 
export default Row;
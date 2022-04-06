import React, { useState, useEffect} from "react";
import axios from "axios";

const Quote = () => {

    const GOT_API_URL = "https://game-of-thrones-quotes.herokuapp.com/v1/random";
    const [quotes, setQuotes] = useState(null);

    useEffect(() => {
        async function fetchQuote() {
            const request = await axios.get(GOT_API_URL);
            setQuotes(request.data.results);
            console.log(request);
            return request;
        }
        fetchQuote();
    }, [GOT_API_URL])
    
    return (
        <div style={{ color: "white" }}>
            
        </div>
    )
}
 
export default Quote;

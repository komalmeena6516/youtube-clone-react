import React, { useState } from "react";
import youtube from "../apis/youtube";

const SearchBar = ({addContent})=>{

let [searchTerm, setSearchTerm] = useState('');

function getVideos(){

    youtube.get('/Search', {
        params:{
            q: searchTerm,
            type: 'video'
        }
    })
    .then(response => addContent(response.data.items))
    .catch(err => console.log(err))
}

    return(
        <div>
            <input type="text"
             placeholder="Search"
             onChange={(e) => setSearchTerm(e.target
                .value)}
             ></input>
             <button onClick={getVideos}>Search</button>
        </div>
    )
}

export default SearchBar
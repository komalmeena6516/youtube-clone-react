
import React, { useState } from 'react';
import SearchBar from './Components/SearachBar';
import './App.css';


const App =() => {

  let [video, setVideo] = useState('');
  let [selectedVideo, setSelectedVideo] = useState(null)

  console.log(video)

  return (
    <div className="App">
    <SearchBar addContent={setVideo}/>
    <h1>video List</h1>
    <h1> selected video </h1>
    </div>
  );
}

export default App;

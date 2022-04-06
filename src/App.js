import React from 'react';
import './App.css';
import Row from './Row';
import requests from './Requests'

function App() {
  return (
    <div className="App">
      <h1>Hello World This Is AD and My ADFlix app</h1>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Originals" fetchUrl={requests.fetchNetflixOriginals} />
    </div>
  );
}

export default App;

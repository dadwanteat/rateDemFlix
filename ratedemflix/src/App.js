import React from 'react';
import './App.css';
import Row from './Row'
import requests from './requests';

function App() {
  return (
    <div className="app">
  
      <h1>Rate dem Flix!</h1>
      <br></br>
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetlixOriginals} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} /> 
    </div>
  );
}

export default App;

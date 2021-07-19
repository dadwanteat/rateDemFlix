import React from 'react';
import './App.css';
import Row from './Row'
import requests from './requests';

function App() {
  return (
    <div className="App">
      <h1>Hey you beautiful bastart, let's make rateDemFlix today</h1>
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetlixOriginals} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title=
    </div>
  );
}

export default App;

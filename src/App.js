import React, { useState, useEffect } from 'react';

const API_URL = `http://api.icndb.com/jokes/random`;

const App = () => {
  const [jokes, setJokes] = useState('');

  const handleJokes = () => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setJokes(data.value.joke));
  };
  useEffect(() => {
    handleJokes();
  }, []);
  return (
    <div className="box">
      <h2>Jokes Generator</h2>
      <p dangerouslySetInnerHTML={{ __html: jokes }} />
      <button onClick={handleJokes}>Get new joke😄</button>
    </div>
  );
};

export default App;

import React, { useState } from 'react';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [fileContents, setFileContents] = useState('');

  const handleSubmit = async () => {
    setIsLoading(true);
    const response = await fetch('https://www.terriblytinytales.com/test.txt');
    const contents = await response.text();
    setFileContents(contents);
    setIsLoading(false);
  };

  return (
    <div className="App">
      <button onClick={handleSubmit}>Submit</button>
      {isLoading ? <p>Loading file...</p> : <p>{fileContents}</p>}
    </div>
  );
}

export default App;

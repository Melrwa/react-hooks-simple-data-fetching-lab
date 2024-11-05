
import React, { useState, useEffect } from 'react';

function App() {
  const [dogsImage, setDogsImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Set to true initially

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((r) => r.json())
      .then((data) => {
        setDogsImage(data.message);
        setIsLoading(false); // Set to false after image is loaded
      })

  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <img src={dogsImage} alt="A Random Dog" />
      )}
    </div>
  );
}

export default App;


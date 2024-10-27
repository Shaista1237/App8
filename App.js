import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputString, setInputString] = useState('');
  const [vowelCount, setVowelCount] = useState(0);

  const countVowels = (str) => {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    return str.split('').filter((char) => vowels.includes(char)).length;
  };

  const handleCount = () => {
    const count = countVowels(inputString);
    setVowelCount(count);
  };

  return (
    <div className="App">
      <h1>Vowel Counter</h1>
      <input
        type="text"
        value={inputString}
        onChange={(e) => setInputString(e.target.value)}
        placeholder="Enter a string"
      />
      <button onClick={handleCount}>Count Vowels</button>
      <p>Number of vowels: {vowelCount}</p>
    </div>
  );
}

export default App;

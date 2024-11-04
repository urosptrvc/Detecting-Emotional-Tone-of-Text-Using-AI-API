import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [text, setText] = useState(''); // User input text
  const [emotion, setEmotion] = useState(null); // Detected emotion
  const [showResult, setShowResult] = useState(false); // Result display toggle

  const handleInputChange = (e) => setText(e.target.value); // Update text state

  // Function to call emotion detection API or use mock data
  const handleCheckEmotion = async () => {
    setShowResult(false);
    const apiKey = process.env.REACT_APP_API_KEY;
    const url = "https://api.sapling.ai/api/v1/tone"; // Replace if needed

    try {
      const response = await axios.post(
        url,
        { key: apiKey, text },
        { headers: { 'Authorization': `Bearer ${apiKey}`, 'Content-Type': 'application/json' } }
      );

      const { data } = response;

      // Check if emotion data is in response
      if (data && data.overall && data.overall.length > 0) {
        const [probability, tone, emoji] = data.overall[0];
        const probabilityPercent = (probability * 100).toFixed(2);

        setEmotion({
          label: tone,
          description: `Emotion is ${tone} ${emoji}, ${probabilityPercent}% confidence.`,
          colorClass: tone.toLowerCase()
        });

        setTimeout(() => setShowResult(true), 100);
      } else {
        setEmotion({
          label: "Neutral",
          description: "No emotion detected.",
          colorClass: 'neutral'
        });
        setShowResult(true);
      }
    } catch (err) {
      const errorMessage = err.response?.data?.msg || "API call issue.";
      console.error("Error:", errorMessage);
      setEmotion({
        label: "Error",
        description: errorMessage,
        colorClass: 'error'
      });
      setShowResult(true);
    }
  };

  return (
    <div className="App">
      <h1>Emotional Tone of Text</h1>
      
      <textarea
        value={text}
        onChange={handleInputChange}
        placeholder="Enter text here"
        rows="4"
        cols="50"
      />

      <button onClick={handleCheckEmotion}>Check</button>

      {emotion && (
        <div className={`emotion-result ${emotion.colorClass} ${showResult ? 'show' : ''}`}>
          <h2>Detected Emotion: {emotion.label}</h2>
          <p>{emotion.description}</p>
        </div>
      )}
    </div>
  );
}

export default App;

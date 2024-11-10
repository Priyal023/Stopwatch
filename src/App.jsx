import { useEffect, useState } from 'react';

import './App.css';

function App() {
  const [seconds, setSeconds] = useState(0);
  const [start, setStart] = useState(false);
  
  useEffect(() => {
    let interval = null;
    if (start) {
      interval = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [start]);

  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <>
      <p>Stopwatch</p>
      <h1>Time: {formatTime(seconds)}</h1>
      <div id="counter_buttons">
        <button onClick={() => setStart(true)}>Start</button>
        <button onClick={() => setStart(false)}>Stop</button>
        <button onClick={() => { setStart(false); setSeconds(0); }}>Reset</button>
      </div>
    </>
  );
}

export default App;

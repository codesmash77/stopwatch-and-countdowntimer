import React, {useState, useEffect} from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import './App.css';
import Timer from './Components/Timer';
import Stopwatch from './Components/Stopwatch';
import Settings from "./Components/Settings";
import SettingsContext from "./Components/SettingsContext";

function App() {
  
  const [showTimer,setShowTimer] = useState(false);

  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(5);
  const [breakMinutes, setBreakMinutes] = useState(0);

  useEffect(() => {
    console.log("Showtimer value has changed!")
  },[showTimer])

  return (
    <div className="App">
      <Stack className="container" direction="row" spacing={2}>
        <Button variant="contained" disabled={!showTimer} onClick={() => setShowTimer(false)}>
          Stopwatch
        </Button>
        <Button variant="contained" disabled={showTimer} onClick={() => setShowTimer(true)}>
          CountDown Timer
        </Button>
      </Stack>
      <div>
        {showTimer 
        ?
        <main>
          <SettingsContext.Provider value={{
          showSettings,
          setShowSettings,
          workMinutes,
          breakMinutes,
          setWorkMinutes,
          setBreakMinutes,
        }}>
          {showSettings ? <Settings /> : <Timer />}
          </SettingsContext.Provider>
          </main> 
          : <Stopwatch/> }
      </div>
    </div>
  );
}

export default App;

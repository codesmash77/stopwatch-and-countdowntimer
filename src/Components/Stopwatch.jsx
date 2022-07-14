import React, {useState, useEffect} from 'react'
import Start from './Buttons/Start';
import Stop from './Buttons/Stop';
import Reset from './Buttons/Reset';
import Lap from './Buttons/AddLap';
import Laps from './Laps';

import Stack from '@mui/material/Stack';

export default function Stopwatch() {

    const [time, setTime] = useState(0);
    const [laps, setLaps] = useState([]);
    const [status, setStatus] = useState(false);

    function startTimer(){
        setStatus(true);
    }

    function stopTimer(){
        setStatus(false);
        
    }

    function resetTimer() {
        setTime(0);
        setLaps([]);
    }

    function TimeLap() {
        const newList = [...laps, time]
        setLaps(newList)
    }

    useEffect(()=>{
        let interval = null;
        if(status){
            interval = setInterval(()=>{
                setTime(prevTime => prevTime+10)
            },10)
        }
        else{
            clearInterval(interval);
        }

        return () => clearInterval(interval)

    },[status])

    return(
        <div className="container">
            <h2>Stopwatch</h2>
            <div className="watch">
                <div className="outer-circle">
                    <div className="inner-circle">
                        <span className="text hour"> {("0" + Math.floor((time / 3600000))).slice(-2)} : </span>
                        <span className="text min"> &nbsp; {("0" + Math.floor((time / 60000) % 60)).slice(-2)} : </span>
                        <span className="text sec"> &nbsp; {("0" + Math.floor((time / 1000) % 60)).slice(-2)} : </span>
                        <span className="text msec"> &nbsp; {("0" + ((time / 10) % 100)).slice(-2)} </span>
                    </div>
                </div>
            </div>
            <div className="button-wrapper">
                <Stack direction="row" spacing={2}>
                    <span>
                        {!status && <Start start={() => startTimer()} />}
                    </span>
                    <span>
                        {status && <Stop stop={() => stopTimer()}/>} 
                    </span>
                    <span>
                        {!status && (time !== 0) && <Reset reset={() => resetTimer()} />}
                    </span>
                    <span>
                    {status && <Lap timelap={() => TimeLap()} />}
                    </span>
                </Stack>
            </div>
            <div>
                <Laps laplist={laps}/>
            </div>
        </div>
)
}

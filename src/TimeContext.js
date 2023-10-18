import React,{ createContext, useState } from 'react';
const TimeContext = createContext();

const TimeProvider = ({children}) =>{
 const [time,setTime] = useState(false);
 const [ms,setMs] = useState(0);
 const [sec,setSec] = useState(0);
 const [min,setMin] = useState(0);
 const [hour,setHour] = useState(0);
 const [intervalId, setIntervalId] = useState(null);
 const [laps, setLaps] = useState([]);
 const [conti,setConti] = useState("START");
 const [pause,setPause] = useState(false);
 const [isDark,setisDark] = useState(false);
    return(
        <TimeContext.Provider value={{time,setTime,sec,setSec,min,setMin,hour,setHour,ms,setMs,conti,setConti,pause,setPause, intervalId, setIntervalId, laps, setLaps, isDark,setisDark}}>
        {children}
        </TimeContext.Provider>
    );
}
export { TimeContext, TimeProvider };

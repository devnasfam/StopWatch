import React, { useContext, useEffect } from 'react';
import { TimeContext } from './TimeContext';

const Buttons = () => {
  const {setMs, setSec, setMin, setTime, time, setHour, conti,setConti, pause,setPause, intervalId, setIntervalId, setLaps, isDark } = useContext(TimeContext);
const TtoLorD = isDark ? "#ced7de" : "#fff";
  const Start = () => {
    if (!intervalId) {
    setConti("START");
    setPause(false);
      const newIntervalId = setInterval(() => {
  setMs(prevMs => {
    const newMs = (prevMs + 1) % 10;
    if (prevMs > 8) {
      setSec(prevSec => {
        if (prevSec >= 59) {
          setSec(0);
          setMin(prevMin => {
            if (prevMin >= 59) {
              setMin(0);
              setHour(prevHour => prevHour + 1);
            } else {
              setMin(prevMin + 1);
            }
          });
        } else {
          setSec(prevSec + 1);
        }
      });
      setMs(0);
    }
    return newMs;
  });
}, 100);
      setIntervalId(newIntervalId);
      setTime(true);
    }
  };

  const Reset = () => {
      clearInterval(intervalId);
      setIntervalId(null);
      setTime(false);
      setPause(false);
      setHour(0);
      setMin(0);
      setSec(0);
      setMs(0);
      setLaps([]);
      setConti("START");
  };
  
  const Stop = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
      setTime(false);
      setPause(true);
      setConti("CONTINUE");
    }
  };
  
  useEffect(() => {
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [intervalId]);

  return (
    <div className="btn_cont">
      <button className="reset" onClick={Reset} style={{color:TtoLorD}}><i className="fa fa-refresh"></i> RESET</button>
      <button className="stop" onClick={Stop} style={{color:TtoLorD}}><i className="fa fa-stop"></i> STOP</button>
      <button className="start" onClick={Start} style={{color:TtoLorD}}><i className={`fa fa-${pause?"pause":"play"}`}></i> {conti}</button>
    </div>
  );
};
export default Buttons;

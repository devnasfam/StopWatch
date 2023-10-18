import React,{ useContext, useRef, useEffect } from 'react';
import { TimeContext } from './TimeContext';
const Lap = () => {
  const { sec, min, hour, ms, laps, setLaps, intervalId, isDark } = useContext(TimeContext);
  const lapsContainerRef = useRef(null);
 const BtoLor2 = isDark ? "#091526" : "#e5f3fd";
 const TtoLorD = isDark ? "#ced7de" : "#081b33";
  const LapAdd = () => {
    if (intervalId) {
      const newLap = {
        lapHour: hour,
        lapMin: min,
        lapSec: sec,
        lapMs: ms
      };
      setLaps([...laps, newLap]);
    }

    if (lapsContainerRef.current) {
      lapsContainerRef.current.scrollTo({
       top: 500,
       behavior: 'smooth'
     });
    }
  };

  return (
    <>
      <div className="lap_cont">
        <button className="lap" onClick={LapAdd}>
          <i className="fa fa-plus"></i> LAP
        </button>
      </div>
      <div className="lap_list">
        <div className="lap_list_title">
          <h4 style={{color:TtoLorD}}>LAPS:</h4>
        </div>
        <div className="lap_items_cont" ref={lapsContainerRef}>
          <ul>
            {laps.map((lap, index) => (
              <li className="lap_item" key={index} style={{color:TtoLorD,background:BtoLor2}}>
                Lap{index + 1}:-
                {lap.lapHour < 10 ? '0' + lap.lapHour : lap.lapHour} :
                {lap.lapMin < 10 ? '0' + lap.lapMin : lap.lapMin} :
                {lap.lapSec < 10 ? '0' + lap.lapSec : lap.lapSec} :
                {lap.lapMs < 10 ? '0' + lap.lapMs : lap.lapMs}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
export default Lap;

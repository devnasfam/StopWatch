import React,{ useContext } from 'react';
import { TimeContext } from './TimeContext';
import Buttons from './Buttons';
import Lap from './Lap';
const StopWatch = () =>{
 const {sec,min,hour,ms,isDark,setisDark} = useContext(TimeContext);
 function SwitchMode(){
     if(isDark){
         setisDark(false);
     }else{
         setisDark(true);
     }
 }
 const TtoLorD = isDark ? "#ced7de" : "#081b33";
 const BtoLorD = isDark ? "#081b33" : "#fff";
 const BtoLor2 = isDark ? "#091526" : "#e5f3fd";
 const isBox = isDark ? "inset 3px 3px 5px rgba(255,255,255,.07)" : "inset 5px 5px 5px rgba(0,0,0,.1)";
    return(
        <>
        <div className="root" style={{color:TtoLorD,background:BtoLor2}}>
         <div className="stop_cont" style={{color:TtoLorD,background:BtoLorD,boxShadow:isBox}}>
         <div className="title_cont">
         <h3 style={{color:TtoLorD}}><i className="fa fa-stopwatch"></i> StopWatch</h3> <div className="modes_cont" onClick={SwitchMode} style={{background:BtoLor2}}><i className={isDark?"fa fa-moon":"fa fa-sun-o"} style={{color:TtoLorD}}></i></div>
         </div>
          <div className="screen" style={{color:TtoLorD,background:BtoLor2}}>
          <span className="hr" style={{color:TtoLorD}}>
          {hour<10?"0"+hour:hour} :
          </span> <span className="min" style={{color:TtoLorD}}>
          {min<10?"0"+min:min} :
          </span>  <span className="sec" style={{color:TtoLorD}}>
          {sec<10?"0"+sec:sec} : 
          </span> <span className="ms" style={{color:TtoLorD}}>
          {ms<10?"0"+ms:ms}
          </span>
          </div>
          <div className="list_time">
          <span className="lhr" style={{color:TtoLorD}}>
          HOUR
          </span> <span className="lmin" style={{color:TtoLorD}}>
          MINUTE
          </span>  <span className="lsec" style={{color:TtoLorD}}>
          SECOND
          </span>
          <span className="lsec" style={{color:TtoLorD}}>
          MS
          </span>
          </div>
          <Buttons />
          <Lap />
         </div>
         </div>
        </>
    );
}
export default StopWatch;

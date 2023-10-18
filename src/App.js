import React from 'react';
import { TimeProvider, TimeContext } from './TimeContext';
import './style.css';
import Stopwatch from './StopWatch';

const App = () =>{
    return(
       <TimeProvider>
        <StopWatch />
       </TimeProvider>
    );
}
export default App;

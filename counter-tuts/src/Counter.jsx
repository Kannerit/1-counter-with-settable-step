import { useEffect, useState } from 'react';
import './Counter.css';
import Display from './components/Display';
import ButtonsPanel from './components/ButtonsPanel';
import Clock from './components/Clock';
import Step from './components/Step';


const Counter = (props) => {

    const [counter, setCounter] = useState(props.counterInitValue);
    const [showClock, setShowClock] = useState(true);

    const [stepValue, setStepValue] = useState(1);

    const updateCounter = (action) => {
        if (action ==="add") {
            setCounter(counter + stepValue);
        } else if (action === "reset") {
            setCounter(props.counterInitValue);
        } else {
            setCounter(0);
        }
    };



    useEffect(()=> {
        console.log('using effect');
    },[counter,])

    return (
        <div className="counter">
            <Display counter={counter} />
            <ButtonsPanel updateCounter={updateCounter}/>
            {showClock ? <Clock setShowClock={setShowClock} />: <p className="clockControl" onClick={()=>setShowClock(true)}>Show Clock</p>}
            <Step setStepValue={setStepValue}/>
        </div>
    );
}

export default Counter; 
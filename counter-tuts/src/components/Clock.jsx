import { useEffect, useState } from "react";

const Clock = (props) => {

    const [time, setTime] = useState(new Date().toLocaleDateString());

    useEffect(()=> {
        console.log('mounted component');
        
        const interval = setInterval(()=> {
            console.log('interval');
            setTime(new Date().toLocaleDateString())
        }, 1000)

        return () => {
            console.log('unmmount and clean');
            clearInterval(interval);
        };
    }, []);
    
    useEffect(()=> {
        console.log("component updated");
    })
    return (
        <p> {time}{""} <span className="clockControl" onClick={()=>props.setShowClock(false)}>x</span></p>
    )
}

export default Clock; 
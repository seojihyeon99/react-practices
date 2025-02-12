import React, {useState, useEffect} from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';

export default function App() {
    const getCurrentTime = () => {
        const now = new Date();
        return {
            hours: now.getHours(),
            minutes: now.getMinutes(),
            seconds: now.getSeconds()
        }
    }

    const [currentTime, setCurrentTime] = useState(getCurrentTime());
    const [ticks, setTicks] = useState(0);

    useEffect(() => {
        console.log("App: componentDidMount");
        const intervalId = setInterval(() => {
            setCurrentTime(getCurrentTime());
            setTicks(prevTicks => prevTicks + 1);
        }, 1000);

        return () => {
            console.log("App: componentWillUnmount");
            clearInterval(intervalId);
        }
    }, []);

    return (
        (ticks === 0 || ticks % 5 !== 0) 
        &&
        <Clock
            title={`ex04: Clock Component II: ${ticks}`}
            hours={currentTime.hours}
            minutes={currentTime.minutes}
            seconds={currentTime.seconds} />
    );
}
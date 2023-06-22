import "./css/style.css";
import { useState, useEffect } from "react";
function HomePage(){

    const [time, setTime] = useState(0);

    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let intervalId;
        if (isRunning) {
            intervalId = setInterval(() => {
                setTime((prevTime) => prevTime + 1000);
            }, 1000);
        }
        return () => {
            clearInterval(intervalId);
        };
    }, [isRunning]);



    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time / 1000) % 60);


    const startTimer = () => {
       setIsRunning(true);
        console.log("Is Pressed");


    };
    const stopTimer = () => {
        // Complete this function
        setIsRunning(false);
    };
    const resetTimer = () => {
        // Complete this function
        setTime(0);
    };

    return (
        <div className="container">
            <h1>Timer</h1>
            <span>{minutes} mins </span>
            <span> {seconds} secs</span>
            <div>
                <button onClick={startTimer}>Start</button>
                <button onClick={stopTimer}>Stop</button>
                <button onClick={resetTimer}>Reset</button>
            </div>
        </div>
    );

}


export default HomePage;

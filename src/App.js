/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import "./index.scss";
import SetupPanel from "./Components/SetupPanel";
import Timer from "./Components/Timer";
import { useState } from "react";

const App = () => {
  const [breakTime, setBreakTime] = React.useState(5);

  const [sessionTime, setSessionTime] = React.useState(25);

  const [whichTime, setWhichTime] = React.useState("Session");

  const [timer, setTimer] = React.useState(1500);

  const [myInterval, setMyInterval] = React.useState(null);

  const minutes = Math.floor(timer / 60);

  const seconds = timer - minutes * 60;

  const [numberOfSessions, setNumberOfSessions] = useState(0);

  React.useEffect(() => {
    if (timer === 0) {
      document.getElementById("beep").play();
    }
    setTimeout(() => {
      if (whichTime === "Session" && timer === 0) {
        setWhichTime("Break");
        setTimer(breakTime * 60);
        setNumberOfSessions((prevState) => prevState + 1);
      }
      if (whichTime === "Break" && timer === 0) {
        setWhichTime("Session");
        setTimer(sessionTime * 60);
      }
    }, [2500]);
  }, [timer]);

  const setTime = (event) => {
    if (
      event.target.id === "break-decrement" &&
      breakTime > 1 &&
      !myInterval &&
      whichTime === "Break"
    ) {
      setTimer((breakTime - 1) * 60);
    } else if (
      event.target.id === "break-increment" &&
      breakTime < 60 &&
      !myInterval &&
      whichTime === "Break"
    ) {
      setTimer((breakTime + 1) * 60);
    } else if (
      event.target.id === "session-decrement" &&
      sessionTime > 1 &&
      !myInterval &&
      whichTime === "Session"
    ) {
      setTimer((sessionTime - 1) * 60);
    } else if (
      event.target.id === "session-increment" &&
      sessionTime < 60 &&
      !myInterval &&
      whichTime === "Session"
    ) {
      setTimer((sessionTime + 1) * 60);
    }
    if (event.target.id === "break-decrement" && breakTime > 1 && !myInterval) {
      setBreakTime((prevState) => prevState - 1);
    }
    if (
      event.target.id === "break-increment" &&
      breakTime < 60 &&
      !myInterval
    ) {
      setBreakTime((prevState) => prevState + 1);
    }
    if (
      event.target.id === "session-decrement" &&
      sessionTime > 1 &&
      !myInterval
    ) {
      setSessionTime((prevState) => prevState - 1);
    }
    if (
      event.target.id === "session-increment" &&
      sessionTime < 60 &&
      !myInterval
    ) {
      setSessionTime((prevState) => prevState + 1);
    }
  };

  let decreaseTimer = () => {
    setTimer((prevState) => prevState > 0 && prevState - 1);
  };

  const beginCountdown = () => {
    if (!myInterval) {
      setMyInterval(setInterval(decreaseTimer, 1000));
    } else {
      setMyInterval(clearInterval(myInterval));
    }
  };

  const restartTimer = () => {
    setMyInterval(clearInterval(myInterval));
    setTimer(25 * 60);
    setBreakTime(5);
    setSessionTime(25);
    setWhichTime("Session");
  };

  const pauseCountdown = () => {
    setMyInterval(clearInterval(myInterval));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Pomodoro Clock <i className="fa fa-clock-o" aria-hidden="true"></i>
        </h1>
      </header>
      <SetupPanel
        breakTime={breakTime}
        sessionTime={sessionTime}
        setTime={setTime}
        minutes={minutes}
        seconds={seconds}
        numberOfSessions={numberOfSessions}
      />
      <Timer
        breakTime={breakTime}
        sessionTime={sessionTime}
        whichTime={whichTime}
        minutes={minutes}
        seconds={seconds}
        beginCountdown={beginCountdown}
        pauseCountdown={pauseCountdown}
        restartTimer={restartTimer}
      />
      <audio
        id="beep"
        src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
      ></audio>
      <footer>
        Designed and Coded by{" "}
        <a href="https://github.com/rafa-vasconcelos" target="blank">
          Rafael Vasconcelos
        </a>
      </footer>
    </div>
  );
};

export default App;

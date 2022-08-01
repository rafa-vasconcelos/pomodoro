const Timer = (props) => {
  return (
    <>
      <div className="countdown">
        <h2 id="timer-label">{props.whichTime}</h2>
        <h1 id="time-left">
          {(props.minutes < 10 ? "0" : "") +
            props.minutes +
            ":" +
            (props.seconds < 10 ? "0" : "") +
            props.seconds}
        </h1>
      </div>
      <div className="control-panel">
        <i
          className="fa fa-solid fa-play"
          onClick={props.beginCountdown}
          id={"start_stop"}
        ></i>
        <i className="fa fa-solid fa-pause" onClick={props.pauseCountdown}></i>
        <i
          class="fa fa-solid fa-undo"
          id="reset"
          onClick={props.restartTimer}
        ></i>{" "}
      </div>
    </>
  );
};

export default Timer;

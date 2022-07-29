const Timer = (props) => {
  return (
    <>
      <div className="countdown">
        <h2>{props.whichTime}</h2>
        <h1>
          {(props.minutes < 10 ? "0" : "") +
            props.minutes +
            ":" +
            (props.seconds < 10 ? "0" : "") +
            props.seconds}
        </h1>
      </div>
      <div className="control-panel">
        <i className="fa fa-solid fa-play" onClick={props.beginCountdown}></i>
        <i className="fa fa-solid fa-pause" onClick={props.pauseCountdown}></i>
        <i class="fa fa-solid fa-undo" onClick={props.restartTimer}></i>{" "}
      </div>
    </>
  );
};

export default Timer;

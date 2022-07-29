const SetupPanel = (props) => {
  return (
    <div className="controls-block">
      <div className="break-panel">
        <h2>Break Length</h2>
        <p>
          <i
            className="fa fa-solid fa-arrow-down break"
            onClick={props.setTime}
          ></i>{" "}
          {props.breakTime}{" "}
          <i className="fa fa-solid fa-arrow-up break" onClick={props.setTime}>
            {" "}
          </i>
        </p>
      </div>
      <div className="session-panel">
        <h2>Session Length</h2>
        <p>
          <i
            className="fa fa-solid fa-arrow-down session"
            onClick={props.setTime}
          ></i>{" "}
          {props.sessionTime}{" "}
          <i
            className="fa fa-solid fa-arrow-up session"
            onClick={props.setTime}
          >
            {" "}
          </i>
        </p>
      </div>
    </div>
  );
};

export default SetupPanel;

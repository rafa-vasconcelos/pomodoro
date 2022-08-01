const SetupPanel = (props) => {
  return (
    <div className="controls-block">
      <div className="break-panel">
        <h2 id="break-label">Break Length</h2>
        <p id="break-length">
          <i
            className="fa fa-solid fa-arrow-down break"
            onClick={props.setTime}
            id="break-decrement"
          ></i>{" "}
          {props.breakTime}{" "}
          <i
            className="fa fa-solid fa-arrow-up break"
            onClick={props.setTime}
            id="break-increment"
          >
            {" "}
          </i>
        </p>
      </div>
      <div className="session-panel">
        <h2 id="session-label">Session Length</h2>
        <p id="session-length">
          <i
            className="fa fa-solid fa-arrow-down session"
            onClick={props.setTime}
            id="session-decrement"
          ></i>{" "}
          {props.sessionTime}{" "}
          <i
            className="fa fa-solid fa-arrow-up session"
            onClick={props.setTime}
            id="session-increment"
          >
            {" "}
          </i>
        </p>
      </div>
    </div>
  );
};

export default SetupPanel;

import React, { useCallback } from "react";

const Locations = () => {
  const onSIGNUPTextClick = useCallback(() => {
    // Please sync "Registration" to the project
  }, []);

  const onFrameContainer6Click = useCallback(() => {
    // Please sync "Welcome" to the project
  }, []);
  return (
    <div className="destination">
      <div className="div">
        <div className="overlap-wrapper">
          <div className="overlap">
            <div className="icon">
              <div className="location-icon">
                <div className="overlap-group">
                  <div className="ellipse" />
                  <div className="text-wrapper">
                    <div className="arrow"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-wrapper-2">
              <input className="transparent-input" type="text" />
            </div>
          </div>
        </div>
        {/* Toggle button with up and down arrows */}
        <div className="switch-button">
          <div className="overlap-2">
            {/* <div className="elipse-2-arrows"></div> */}
            {/* <img
              className="img"
              alt="Ellipse"
              src="src\assets\ellipse-1434.svg"
            /> */}
            <div className="text-wrapper-3 up-n-down"></div>
          </div>
        </div>
      </div>
      <div className="div">
        <div className="overlap-wrapper">
          <div className="overlap-3">
            <div className="icon">
              <div className="location-icon">
                <div className="overlap-group-2">
                  <div className="ellipse" />
                  <div className="text-wrapper">
                    {" "}
                    <div className="arrow"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-wrapper-2">
              {" "}
              <input className="transparent-input" type="text" />
            </div>
          </div>
        </div>
        <div className="switch-button">
          <div className="overlap-2">
            <div className="search"></div>
            {/* <img className="ellipse-2" alt="Ellipse" src="ellipse-1434.png" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Locations;

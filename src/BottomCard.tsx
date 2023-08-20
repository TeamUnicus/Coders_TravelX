import React, { ReactNode } from "react";

interface Props {
  title: string;
  contentImage: string;
  children: ReactNode;
}

const BottomCard = ({ title, contentImage, children }: Props) => {
  return (
    <div className="col-lg-3 col-md-4 text-center d-flex justify-content-center">
      <div className="main-window-card m-2">
        <div className="div">
          <div className="topic">
            <div className="overlap-group">
              <img
                className="rectangle"
                alt="Rectangle"
                src="src\assets\rectangle7.svg"
              />
              <div className="super-x-train">{title}</div>
            </div>
          </div>
          <img className="superx" alt="Superx" src={contentImage} />
          <div className="overlap">
            <div className="div-2" />
            <div className="text-wrapper">Book a Seat</div>
          </div>
          <div className="mode-luxury-train-wrapper">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default BottomCard;

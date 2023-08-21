import "./buttonCarosel.css";

const ButtonCarosel = () => {
  return (
    <>
      <div className="container pb-2 pt-5">
        <div className="row buttons justify-content-center">
          <div className="col-4 d-flex justify-content-center align-items-center">
            <button className="custom-button">🍿Popular</button>
          </div>
          <div className="col-4 d-flex justify-content-center align-items-center">
            <button className="custom-button">🏔️Hike</button>
          </div>
          <div className="col-4 d-flex justify-content-center align-items-center">
            <button className="custom-button">🆕New</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ButtonCarosel;

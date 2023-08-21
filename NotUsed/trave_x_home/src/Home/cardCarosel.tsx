import "./cardCarosel.css";
const CardCarosel = () => {
  return (
    <>
      <div id="cardCarousel" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row justify-content-center">
              <div className="col-md-4">
                <div className="container mt-4">
                  <div className="card fixed-card">
                    <img
                      height={500}
                      width={500}
                      src="src\assets\images\location4.png"
                      className="card-img-top"
                      alt="Image"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Fortuna</h5>
                      <p className="card-subtitle mb-2 text-muted">Leo, Mars</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                        </div>
                        <p className="card-text ml-2">4.5</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="container mt-4">
                  <div className="card fixed-card">
                    <img
                      height={500}
                      width={500}
                      src="src\assets\images\location3.png"
                      className="card-img-top"
                      alt="Image"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Jolly Ball</h5>
                      <p className="card-subtitle mb-2 text-muted">Leo, Mars</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                        </div>
                        <p className="card-text ml-2">4.5</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="container mt-4">
                  <div className="card fixed-card">
                    <img
                      height={500}
                      width={500}
                      src="src\assets\images\location2.png"
                      className="card-img-top"
                      alt="Image"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Aggr Centa</h5>
                      <p className="card-subtitle mb-2 text-muted">Leo, Mars</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                        </div>
                        <p className="card-text ml-2">4.5</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#cardCarousel"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#cardCarousel"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

      {/* Card */}

      {/* <div className="container mt-4">
        <div className="card fixed-card">
          <img
            height={500}
            width={500}
            src="src\assets\images\location4.png"
            className="card-img-top"
            alt="Image"
          />
          <div className="card-body">
            <h5 className="card-title">Card Title</h5>
            <p className="card-subtitle mb-2 text-muted">Card Subtitle</p>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
              </div>
              <p className="card-text ml-2">4.5</p>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default CardCarosel;

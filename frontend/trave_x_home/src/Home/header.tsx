import "./headerStyle.css";

const Appheader = () => {
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand">Travel-X</a>
          <div className="centered-search">
            <form className="d-flex">
              <input
                className="form-control me-2 expandable-search"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </div>
          <div className="profile-pic"></div>
        </div>
      </nav>
    </>
  );
};

export default Appheader;

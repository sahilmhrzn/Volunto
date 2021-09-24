import React from 'react';



function Navigation() {
  return (
    <>  
      {/* <div className="navbar-dark bg-dark shadow">
        <div className="container">
          <div className="col-md-12"> */}
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand mb-0 h1" href="/">Volunto</a>
            <div className="collapse navbar-collapse " id="navbarSupportedContent">
              <ul className="navbar-nav me-auto ms-5  mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">Event</a>
                </li>               
              </ul>
              <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
          {/* </div>
        </div>
      </div> */}
    </>
  )
}

export default Navigation

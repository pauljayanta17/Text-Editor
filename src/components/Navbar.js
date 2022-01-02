import React from 'react'
import PropTypes from 'prop-types'
export default function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/" style={{fontSize:15}}>
                  {props.title}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                {props.aboutUs}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                {props.contactUs}
                </a>
              </li>
            
            </ul>
            {/* <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
          </div>
        </div>
      </nav>
    )
}


// }
Navbar.propTypes = {
title : PropTypes.string
}

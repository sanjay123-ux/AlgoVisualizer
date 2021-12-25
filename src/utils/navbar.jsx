import React from "react";

const NavBar = () => (
  <div className="bg-success py-2 px-2">
    <span>
     <a
        className="btn-sm text-decoration-none bg-success rounded-0 text-light"
        href="https://github.com/dipeshpatil/algorithms-visualiser"
      >
        <i className="fab text-light fa-github"></i>
        &nbsp; Source Code
      </a> 
      <a
        className="btn-sm text-decoration-none bg-success rounded-0 text-light"
        href="https://www.linkedin.com/in/sanjay-chauhan98970/"
      >
        <i className="fab text-light fa-linkedin"></i>
        &nbsp; Sanjay
      </a>
      <a
        className="btn-sm text-decoration-none bg-success rounded-0 text-light"
        href="https://www.linkedin.com/in/prithvi-chauhan-baa0a7188/"
      >
        <i className="fab text-light fa-linkedin"></i>
        &nbsp; Prithvi
      </a>
      <a
        className="btn-sm text-decoration-none bg-success rounded-0 text-light"
        href="https://www.linkedin.com/in/rohit-singh-chauhan-aa2a90181/"
      >
        <i className="fab text-light fa-linkedin"></i>
        &nbsp; Rohit
      </a>
    </span>
  </div>
);

export default NavBar;

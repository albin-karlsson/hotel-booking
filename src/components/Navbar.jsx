import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="nav-container">
      <Link to="/">
        <h1>ReactStayPro</h1>
      </Link>
      <div className="flex-container">
        <Link>
          <p>About</p>
        </Link>
        <Link>
          <p>Contact</p>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;

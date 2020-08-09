import React from "react";
import "./header.css";

function Header({ children }) {
  return (
    <header>
      <div className="container-principal">
        <div className="container-title-social">
          <h1>Social Media Dashboard</h1>
          <div className="container-total-followers">
            <h3>Total Followers:</h3>
            <p>23.004</p>
          </div>
        </div>
        {children}
      </div>
    </header>
  );
}

export default Header;

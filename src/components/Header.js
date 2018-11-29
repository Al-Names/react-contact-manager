import React from "react";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-inverse">
      <div className="container">
        <a href="/" className="navbar-brand">
          Contact Manager
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nave-item">
              <a href="/" className="nav-link">
                Home
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Header;

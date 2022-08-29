import React from "react";


const Header = () => {
  return (
    <header className="header-section">
      <a href="index.html" className="site-logo">
        <img src="img/logo.png" alt />
      </a>
      <nav className="header-nav">
        {/* <ul className="main-menu">
          <li>
            <a href="index.html" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="about-us.html">About</a>
          </li>
          <li>
            <a href="#">Buy</a>
          </li>
          <li>
            <a href="#">Pages</a>
            <ul className="sub-menu">
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="search-result.html">Search Result</a>
              </li>
              <li>
                <a href="single-property.html">Property</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="news.html">News</a>
          </li>
          <li>
            <a href="contact.html">Contact</a>
          </li>
        </ul> */}
        <div className="header-right">
          <div className="user-panel">
            {/* <a href="#" className="login">
              Sign in
            </a> */}
            <a href="#" className="register">
              Get Started
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

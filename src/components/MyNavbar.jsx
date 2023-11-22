import React, { useState } from "react";
import { Container } from "react-bootstrap";

const MyNavbar = () => {
  const [nav, setnav] = useState(true);
  if (nav) {
    document.body.classList.remove("overflow_hidden");
  } else {
    document.body.classList.add("overflow_hidden");
  }
  return (
    <>
      <header>
        <Container>
          <nav>
            <div className="d-flex justify-content-between align-items-center">
              <button className="logo-btn">Logo</button>
              <ul
                onClick={() => setnav(true)}
                className={`${
                  nav
                    ? "d-flex align-items-center nav_sm gap-5 m-0 p-0"
                    : "d-flex justify-content-cente bg-white nav_sm nav_show align-items-center gap-4 p-0"
                }`}
              >
                <li onClick={() => setnav(true)} className=" cursor">
                  Home
                </li>
                <li onClick={() => setnav(true)} className=" cursor">
                  About
                </li>
                <li onClick={() => setnav(true)} className=" cursor">
                  Faq
                </li>
                <li onClick={() => setnav(true)} className=" cursor">
                  service
                </li>
                <li className="d-md-none d-block" onClick={() => setnav(true)}>
                  <button className="close-btn">&times;</button>
                </li>
              </ul>
              <button
                className="d-md-none d-block home-btn"
                onClick={() => setnav(false)}
              >
                &#36067;
              </button>
            </div>
          </nav>
        </Container>
      </header>
    </>
  );
};

export default MyNavbar;

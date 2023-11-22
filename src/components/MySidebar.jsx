import React, { useState } from "react";
import { Container } from "react-bootstrap";

const MySidebar = () => {
  const [nav, setnav] = useState(true);
  if (nav) {
    document.body.classList.remove("overflow-hidden");
  } else {
    document.body.classList.add("overflow-hidden");
  }
  return (
    <>
      <header>
        <Container>
          <nav>
            <div className="d-flex justify-content-between gap-4">
              <ul
                onClick={() => setnav(true)}
                className={`${
                  nav
                    ? "d-none nav_md"
                    : "d-flex justify-content-cente nav_md side_show align-items-center gap-4 p-0"
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
                <li className=" d-block" onClick={() => setnav(true)}>
                  <button className="close-btn">&times;</button>
                </li>
              </ul>
              <button className="home-btn" onClick={() => setnav(false)}>
                &#36067;
              </button>
            </div>
          </nav>
        </Container>
      </header>
    </>
  );
};

export default MySidebar;

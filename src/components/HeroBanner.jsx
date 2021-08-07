import React, { useEffect, useRef } from "react";
import HeroBannerImg from "../images/man.png";
import { NavLink } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
// ityped plugin
import { init } from "ityped";

function HeroBanner() {
  // auto typed / ityped plugin

  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 1500,
      backSpeed: 60,
      strings: [" Developer", " Designer", " Content Creator"],
    });
  }, []);

  return (
    <>
      <section id="heroBanner" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-6 col-lg-6 d-flex justify-content-center">
              <div className="hero-banner-img">
                <NavLink to="/contact">
                  <img
                    src={HeroBannerImg}
                    alt="Freelancer"
                    className="img-fluid"
                  />
                </NavLink>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 align-self-center">
              <div className="hero-banner-content">
                <h2 className="display-2 fw-bold text-capitalize">
                  Hi there, I'm
                </h2>
                <h2 className="text-capitalize fw-bold display-2">Mahabur </h2>
                <span className="info">Freelance</span>
                <span className="move" ref={textRef}></span>
              </div>
            </div>
            {/* down arrow  */}
            <div className="down-arrow">
              <a href="#portfolio">
                <FaAngleDown />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroBanner;

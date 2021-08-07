import React, { useState } from "react";
import {
  FaMobileAlt,
  FaAngleRight,
  FaArrowRight,
  FaChevronRight,
  FaChevronLeft,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import slideOne from "../images/slide2.svg";
import worksData from "../components/WorksData";
import WorksSlideContent from "../components/WorksSlideContent";

function Works() {
  const [hover, setHover] = useState(true);

  const toggle = () => {
    setHover(!hover);
  };
  return (
    <>
      <section id="works">
        <div
          id="myCarousel"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="container">
            <h2 className="text-center">Works</h2>
            <div className="row text-center">
              <div className="col-xl-8 mx-auto">
                <div className="carousel-inner">
                  {/* ---------------- */}
                  <div className="carousel-item active">
                    <div className="slider-content p-5">
                      <div className="slider-img">
                        <img src={slideOne} alt="Slide First" />
                      </div>
                      <div className="slide-content mt-5">
                        <div className="icon">
                          <span>
                            <FaMobileAlt />
                          </span>
                        </div>
                        <div className="slide-text">
                          <h4 className="my-3 text-capitalize">
                            Web Development
                          </h4>
                          <p className="mb-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Esse, quis.
                          </p>

                          <NavLink
                            to="/works"
                            onMouseEnter={toggle}
                            onMouseLeave={toggle}
                          >
                            Projects
                            <span className="mx-1">
                              {hover ? <FaAngleRight /> : <FaArrowRight />}
                            </span>
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                  {worksData.map((data) => (
                    <WorksSlideContent key={data.id} {...data} />
                  ))}
                  {/* ---------------- */}
                </div>
              </div>
            </div>
            {/* left arrow  / right arrow  */}
            <div className="right-arrow">
              <a
                href="#myCarousel"
                data-bs-slide="prev"
                className="carousel-control-prev"
              >
                <span className="right-angle">
                  <FaChevronLeft />
                </span>
              </a>
            </div>
            <div className="left-arrow">
              <a
                href="#myCarousel"
                data-bs-slide="next"
                className="carousel-control-next"
              >
                <span className="left-angle">
                  <FaChevronRight />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Works;

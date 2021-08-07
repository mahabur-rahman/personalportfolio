import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaAngleRight, FaArrowRight } from "react-icons/fa";

function WorksSlideContent(props) {
  const [hover, setHover] = useState(true);

  const toggle = () => {
    setHover(!hover);
  };

  return (
    <>
      <div
        className={props.active ? "carousel-item active" : "carousel-item"}
        key={props.id}
      >
        <div className="slider-content p-5">
          <div className="slider-img">
            <img src={props.imgSrc} alt={props.title} />
          </div>
          <div className="slide-content mt-5">
            <div className="icon">
              <span>{props.icon}</span>
            </div>
            <div className="slide-text">
              <h4 className="my-3 text-capitalize">{props.title}</h4>
              <p className="mb-5">{props.text}</p>

              <NavLink to="/works" onMouseEnter={toggle} onMouseLeave={toggle}>
                Projects
                <span className="mx-1">
                  {hover ? <FaAngleRight /> : <FaArrowRight />}
                </span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WorksSlideContent;

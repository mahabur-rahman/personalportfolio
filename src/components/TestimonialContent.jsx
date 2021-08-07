import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

function TestimonialContent({
  imgSrc,
  name,
  title,
  text,
  icon,
  visit,
  featured,
}) {
  return (
    <>
      <div className="col-xl-4 col-lg-4 col-md-8 mx-auto">
        <div
          className={
            featured
              ? "featured card text-center shadow"
              : "card text-center shadow"
          }
        >
          <div className="left-icon">
            <span className="quote">
              <FaQuoteLeft />
            </span>
          </div>

          <div className="d-flex align-items-center justify-content-center">
            <div className="test-img">
              <img src={imgSrc} className="card-img-top" alt={title} />
            </div>
            <div className="right-icon">
              <a href={visit} target="blank">
                <span>{icon}</span>
              </a>
            </div>
          </div>
          <div className="card-body">
            <p className="card-text mt-4">{text}</p>
            <h5 className="card-title mt-5">{name}</h5>
            <h6 className="text-muted text-uppercase">{title}</h6>
          </div>
        </div>
      </div>
    </>
  );
}

export default TestimonialContent;

import React from "react";
import TestimonialContent from "../components/TestimonialContent";
import TestData from "../components/TestData";

function Testimonial() {
  return (
    <>
      <section id="testimonial">
        <div className="container">
          <div className="row text-center">
            <div className="col-xl-12">
              <div className="testimonial-heading mb-5 pb-5">
                <h2>Testimonial</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row gy-5">
                {TestData.map((data) => {
                  return <TestimonialContent key={data.id} {...data} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonial;

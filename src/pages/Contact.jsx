import React, { useState } from "react";
import contactImg from "../images/contact.svg";

function Contact() {
  const [info, setInfo] = useState({
    name: "",
    email: "",
    password: "",
    message: "",
  });
  const [message, setMessage] = useState(false);

  const formEventChange = (event) => {
    const { name, value } = event.target;

    setInfo((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `Name : ${info.name} Email : ${info.email} Password : ${info.password} Message : ${info.message}`
    );

    setMessage(true);
  };

  return (
    <>
      <section id="contact">
        <div className="container">
          <div className="row text-center">
            <div className="col-xl-12">
              <div className="testimonial-heading mb-5">
                <h2> Contact Me </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-5 col-lg-5 col-md-5 mx-auto">
              <div className="contact-img mb-5 mb-md-0">
                <img src={contactImg} alt="Contact Me" className="img-fluid" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 align-self-center">
              <div className="contact-form">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <input
                      name="name"
                      value={info.name}
                      onChange={formEventChange}
                      type="text"
                      className="form-control"
                      placeholder="Name"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      name="email"
                      value={info.email}
                      onChange={formEventChange}
                      type="email"
                      className="form-control"
                      placeholder="abc@gmail.com"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      name="password"
                      value={info.password}
                      onChange={formEventChange}
                      type="password"
                      className="form-control"
                      placeholder="Password"
                    />
                  </div>
                  <div className="mb-3">
                    <textarea
                      name="message"
                      value={info.message}
                      onChange={formEventChange}
                      className="form-control"
                      rows="4"
                      placeholder="Message.."
                    />
                  </div>
                  <div className="text-center mt-4">
                    <button type="submit" className="btn btn-dark">
                      Send
                    </button>
                  </div>
                  <div className="text-center mt-4">
                    {message && <span>Thanks, I'll reply very soon 🙂</span>}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;

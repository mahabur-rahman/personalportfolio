import React, { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaInstagram,
  FaLinkedinIn,
  FaAngleUp,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import footerLinks from "./FooterLinks";
import { paragraph } from "./FooterLinks";

function Footer() {
  const name = " Mahabur Rahman";
  const time = new Date().getFullYear();

  const [email, setEmail] = useState({
    email: "",
  });

  //   for subscribe

  const [msg, setMsg] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmail((data) => {
      return {
        ...data,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMsg(true);
  };

  return (
    <>
      <footer id="footer" className="text-center">
        <div className="container p-4">
          <section className="mb-4 social-icon">
            <a
              style={{ backgroundColor: "#3b5998" }}
              className="btn btn-primary btn-floating m-1"
              href="#!"
              role="button"
            >
              <FaFacebookF />
            </a>

            <a
              style={{ backgroundColor: "#55acee" }}
              className="btn btn-primary btn-floating m-1"
              href="#!"
              role="button"
            >
              <FaTwitter />
            </a>

            <a
              style={{ backgroundColor: "#dd4b39" }}
              className="btn btn-primary btn-floating m-1"
              href="#!"
              role="button"
            >
              <FaGoogle />
            </a>

            <a
              style={{ backgroundColor: "#ac2bac" }}
              className="btn btn-primary btn-floating m-1"
              href="#!"
              role="button"
            >
              <FaInstagram />
            </a>

            <a
              style={{ backgroundColor: "#0082ca" }}
              className="btn btn-primary btn-floating m-1"
              href="#!"
              role="button"
            >
              <FaLinkedinIn />
            </a>
          </section>

          <section className="links">
            <form onSubmit={handleSubmit}>
              <div className="row d-flex justify-content-center">
                <div className="col-md-5 col-12">
                  <div className="form-outline mb-4">
                    <input
                      name="email"
                      value={email.email}
                      onChange={handleChange}
                      type="email"
                      className="form-control"
                      placeholder="Email Address"
                    />

                    {msg ? (
                      <span className="text-success">
                        Your email is pending...
                      </span>
                    ) : (
                      <span className="text-muted">
                        Please enter valid email
                      </span>
                    )}
                  </div>
                </div>

                <div className="col-auto">
                  <button type="submit" className="btn btn-primary mb-4">
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </section>

          <section className="mb-5 mt-1">
            <p className="text-muted">{paragraph}</p>
          </section>

          <section>
            <div className="row">
              {footerLinks.map((data) => (
                <div className="col-lg-3 col-md-6 mb-4 mb-md-0" key={data.id}>
                  <h5 className="text-uppercase">{data.title}</h5>

                  <ul className="list-unstyled mb-0">
                    <li className="my-2">
                      <NavLink
                        to={data.visit}
                        className="text-muted text-decoration-none"
                      >
                        {data.list1}
                      </NavLink>
                    </li>
                    <li className="my-2">
                      <NavLink
                        to={data.visit}
                        className="text-muted text-decoration-none"
                      >
                        {data.list2}
                      </NavLink>
                    </li>
                    <li className="my-2">
                      <NavLink
                        to={data.visit}
                        className="text-muted text-decoration-none"
                      >
                        {data.list3}
                      </NavLink>
                    </li>
                    <li className="my-2">
                      <NavLink
                        to={data.visit}
                        className="text-muted text-decoration-none"
                      >
                        {data.list4}
                      </NavLink>
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="text-center p-3 copyright-text">
          &copy; Copyright and all rights reserved {time}. Developed by
          <a href="#contact" className="text-decoration-none">
            {name}
          </a>
        </div>
        {/* arrow top  */}
        <div className="top-arrow">
          <span>
            <a href="#header">
              <FaAngleUp />
            </a>
          </span>
        </div>
      </footer>
    </>
  );
}

export default Footer;

import React, { useState, useEffect } from "react";
import PortfolioList from "../components/PortfolioList";
import PortfolioListData from "../components/PortfolioListData";
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from ".././components/FilteringData";

function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [filtering, setFiltering] = useState([]);

  useEffect(() => {
    switch (selected) {
      case "featured":
        setFiltering(featuredPortfolio);
        break;

      case "web":
        setFiltering(webPortfolio);
        break;

      case "mobile":
        setFiltering(mobilePortfolio);
        break;

      case "design":
        setFiltering(designPortfolio);
        break;

      case "content":
        setFiltering(contentPortfolio);
        break;

      default:
        setFiltering(featuredPortfolio);
    }
  }, [selected]);

  return (
    <>
      <section id="portfolio">
        <div className="container">
          <div className="row text-center">
            <div className="col-xl-12">
              <div className="portfolio-heading mb-5">
                <h2>Portfolio</h2>
              </div>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-xl-12 col-sm-12 col-11 mx-auto">
              <div className="filter-list">
                <ul className="list-inline">
                  {/* -------------------- */}
                  {PortfolioListData.map((item) => {
                    return (
                      <PortfolioList
                        key={item.id}
                        {...item}
                        id={item.id}
                        active={selected === item.id}
                        setSelected={setSelected}
                      />
                    );
                  })}
                  {/* -------------------- */}
                </ul>
              </div>
            </div>
          </div>

          <div className="row mt-5 text-center">
            <div className="col-xl-10 col-lg-10 mx-auto">
              <div className="row gy-4 text-center">
                {/* ------- */}
                {filtering.map((item) => {
                  return (
                    <div
                      className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-10 mx-auto"
                      key={item.id}
                    >
                      <div className="card bg-dark text-white">
                        <img
                          src={item.imgSrc}
                          className="card-img"
                          alt={item.title}
                        />
                        <div className="card-img-overlay">
                          <h5 className="card-title">{item.title}</h5>
                        </div>
                      </div>
                    </div>
                  );
                })}
                {/* ------- */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;

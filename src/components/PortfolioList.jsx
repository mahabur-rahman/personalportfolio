import React from "react";

function PortfolioList({ title, id, active, setSelected }) {
  return (
    <>
      <li
        className={active ? "active list-inline-item" : "list-inline-item"}
        onClick={() => setSelected(id)}
      >
        {title}
      </li>
    </>
  );
}

export default PortfolioList;

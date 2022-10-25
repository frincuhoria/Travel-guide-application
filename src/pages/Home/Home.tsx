import React from "react";
import { useNavigate } from "react-router-dom";

import "./Home.css";

export const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/products");
  };

  return (
    <div style={{ height: "calc(100% - 351px)" }}>
      <div className="home-container">
        <div className="items">
          <h1>ADVENTURE AWAITS</h1>
          <p
            style={{ fontWeight: "500", color: "#393E46", fontSize: "larger" }}
          >
            What are you waiting for?
          </p>
          <button
            type="button"
            className="btn btn-outline-secondary"
            id="btn-get-started"
            onClick={handleClick}
          >
            GET STARTED
          </button>
        </div>
      </div>
    </div>
  );
};

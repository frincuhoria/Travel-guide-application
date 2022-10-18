import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

import "./Home.css";

export const Home = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  if (inputRef.current != null) {
    inputRef.current.scrollIntoView({ behavior: "smooth" });
  }
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/products");
  };

  return (
    <div style={{height: "calc(100% - 351px)"}}>
      <div className="home-container">
        <div className="items">
          <h1>ADVENTURE AWAITS</h1>
          <p>What are you waiting for?</p>
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
      <div ref={inputRef}></div>
    </div>
  );
};

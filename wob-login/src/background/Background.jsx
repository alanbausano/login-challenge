import React from "react";
import background from "../assets/wobiz.png";
import "./Background.css";
import { QUERY_KEYS } from "../query-keys";

export const Background = () => {
  return (
    <>
      <div className="col-lg-8 col-md-6 d-none d-md-block p-0 col">
        <div className="background-container">
          <img src={background} alt="bg" className="background-image" />
          <div className="background-register-container">
            <h5 className="background-register-title">
              {QUERY_KEYS.REGISTER_TITLE}
            </h5>
            <button className="btn btn-outline-light">
              {QUERY_KEYS.REGISTER_BUTTON}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

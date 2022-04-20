import React from "react";
import "./Form.css";
import logo from "../assets/logo.svg";
import { QUERY_KEYS } from "../query-keys";

export const Form = () => {
  return (
    <div className="form-container">
      <img src={logo} alt="Logo" className="form-logo" />
      <div>
        <h2 className="form-title">{QUERY_KEYS.FORM_TITLE}</h2>
      </div>
      <form className="form-input-container mt-4">
        <div className="mb-3">
          <label for="email" className="form-label">
            {QUERY_KEYS.EMAIL}
          </label>
          <input
            type="email"
            className="form-control py-3"
            id="email"
            autoComplete="off"
            placeholder={QUERY_KEYS.PLACEHOLDER_EMAIL}
          />
        </div>
        <div className="mb-3">
          <label for="pass" className="form-label">
            {QUERY_KEYS.PASSWORD}
          </label>
          <input
            type="password"
            id="pass"
            className="form-control py-3"
            autoComplete="off"
            placeholder={QUERY_KEYS.PLACEHOLDER_PASSWORD}
          />
        </div>
        <div>
          <button className="form-forgot-button">
            {QUERY_KEYS.FORGOT_PASSWORD}
          </button>
        </div>
        <button
          type="submit"
          className="form-submit-button btn btn-lg btn-block mt-3"
        >
          {QUERY_KEYS.SUBMIT}
        </button>
      </form>
    </div>
  );
};

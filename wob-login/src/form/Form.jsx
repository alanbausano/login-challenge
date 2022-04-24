import React from "react";
import "./Form.css";
import logo from "../assets/logo.svg";
import { QUERY_KEYS } from "../query-keys";
import { useForm, Controller } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useLogin } from "../hooks/useLogin";

export const Form = () => {
  const { handleLogin, isLoading } = useLogin();
  const validationSchema = yup.object().shape({
    Username: yup.string().email().required(QUERY_KEYS.REQUIRED_FIELD),
    Password: yup
      .string()
      .min(6, QUERY_KEYS.PASSWORD_ERROR)
      .required(QUERY_KEYS.REQUIRED_FIELD),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (datos) => {
    console.log(datos);
    handleLogin(datos);
  };

  return (
    <div className="form-container">
      <img src={logo} alt="Logo" className="form-logo" />
      <div>
        <h2 className="form-title">{QUERY_KEYS.FORM_TITLE}</h2>
      </div>
      <form
        className="form-input-container mt-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-1 form-group">
          <label htmlFor="email" className="form-label">
            {QUERY_KEYS.EMAIL}
          </label>
          <Controller
            name="Username"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                type="email"
                className="form-control py-3"
                id="email"
                autoComplete="off"
                placeholder={QUERY_KEYS.PLACEHOLDER_EMAIL}
                {...field}
              />
            )}
          />
        </div>
        <div className="mb-1 form-group">
          <label htmlFor="pass" className="form-label">
            {QUERY_KEYS.PASSWORD}
          </label>
          <Controller
            name="Password"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                type="password"
                id="pass"
                className="form-control py-3"
                autoComplete="off"
                placeholder={QUERY_KEYS.PLACEHOLDER_PASSWORD}
                {...field}
              />
            )}
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

import React from "react";
import "./Form.css";
import logo from "../assets/logo.svg";
import { QUERY_KEYS } from "../query-keys";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useLogin } from "../hooks/useLogin";

export const Form = () => {
  const { handleLogin, isLoading, data } = useLogin();
  const validationSchema = yup.object().shape({
    Username: yup
      .string()
      .email(QUERY_KEYS.EMAIL_ERROR)
      .required(QUERY_KEYS.REQUIRED_EMAIL),
    Password: yup
      .string()
      .required(QUERY_KEYS.REQUIRED_PASSWORD)
      .min(6, QUERY_KEYS.PASSWORD_ERROR),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (formData) => {
    if (formData !== undefined) {
      handleLogin(formData);
    }
  };

  const wrongCredentials = data?.success === false;

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
        {wrongCredentials && (
          <div className="alert alert-danger form-alert py-2">
            {QUERY_KEYS.WRONG_CREDENTIALS}
          </div>
        )}
        <div className="mb-2 form-group">
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
        {errors?.Username !== undefined && (
          <div className="alert alert-danger form-alert py-2">
            {errors.Username.message}
          </div>
        )}
        <div className="mb-2 form-group">
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
        {errors?.Password !== undefined && (
          <div className="alert alert-danger form-alert py-2">
            {errors.Password.message}
          </div>
        )}
        <div>
          <button className="form-forgot-button">
            {QUERY_KEYS.FORGOT_PASSWORD}
          </button>
        </div>
        <button
          type="submit"
          className="form-submit-button btn btn-lg btn-block mt-3"
        >
          {isLoading ? (
            <div
              className="spinner-border spinner-border-sm text-light"
              role="status"
            />
          ) : (
            <>{QUERY_KEYS.SUBMIT}</>
          )}
        </button>
      </form>
    </div>
  );
};

export const URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8080/login"
    : "/login";

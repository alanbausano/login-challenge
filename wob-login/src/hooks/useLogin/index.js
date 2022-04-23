import { LoginApi } from "./api";
import { useMutation } from "react-query";

const useLogin = () => {
  const { mutate, isLoading, data } = useMutation(LoginApi.Login, {
    onError: (error) => console.log(error),
  });

  return {
    handleLogin: mutate,
    isLoading,
    data,
  };
};

export { useLogin };

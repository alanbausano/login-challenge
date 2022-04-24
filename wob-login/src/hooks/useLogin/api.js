import axios from "axios";
import { URL } from "../../constants";

const Login = async (payload) => {
  const response = await axios.post(URL, payload);
  console.log(response.data);
  return response.data;
};

export const LoginApi = { Login };

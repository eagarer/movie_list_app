import axios from "axios";

const API_BASE_URL = "https://movie-list-api-six.vercel.app/auth";

const AuthService = {
  login: (values) => {
    return axios.post(`${API_BASE_URL}/login`, values);
  },
  register: (values) => {
    return axios.post(`${API_BASE_URL}/register`, values);
  }
};

export default AuthService;

import axios from "axios";

const API_BASE_URL = "https://movie-list-api-six.vercel.app";

const AuthService = {
  login: (values) => {
    return axios.post(`${API_BASE_URL}/auth/login`, values);
  },
  register: (values) => {
    return axios.post(`${API_BASE_URL}/auth/register`, values);
  },
  getAllMovies: () => {
    return axios.get(`${API_BASE_URL}/movies`);
  }
};

export default AuthService;

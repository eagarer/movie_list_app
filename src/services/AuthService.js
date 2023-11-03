import axios from 'axios';

const API_BASE_URL = 'Base Api Here';

const AuthService = {
  login: (values) => {
    return axios.post(`${API_BASE_URL}/login`, values);
  },
};

export default AuthService;
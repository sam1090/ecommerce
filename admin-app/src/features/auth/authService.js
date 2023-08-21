import axios from "axios";
import { base_url } from "../../utils/baseUrl";


const login = async(userData) => {
  const response = await axios.post(`${base_url}user/admin-login`, userData);

  console.log(response.data);
}

const authService = {
  login,
};

export default authService;
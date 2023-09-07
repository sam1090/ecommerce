import axios from "axios";
import { base_url } from "../../utils/baseUrl";
const getTokenFromLocalStorage = localStorage.getItem("user")
? JSON.parse(localStorage.getItem("user")) : null;

const config = {
  headers: {
    Authorization : `Bearer ${getTokenFromLocalStorage.token}`,
    Accept : "application/json",
  }
}


const login = async(userData) => {


  const response = await axios.post(`${base_url}users/admin-login`, userData);

  console.log("User",response.data);

  if(response.data){
    localStorage.setItem('user' , JSON.stringify(response.data));

  }
  return response.data;
  
}

const getOrders = async () => {
  
  const response = await axios.get(`${base_url}users/get-all-orders`, config);

  console.log(response.data);

  return response.data;
};


const authService = {
  login,
  getOrders,
};

export default authService;
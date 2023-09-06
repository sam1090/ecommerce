

import axios from "axios";
import { base_url } from "../../utils/baseUrl";

const getOrders = async () => {
  const response = await axios.get(`${base_url}users/get-orders`);

  console.log(response.data);

  return response.data;
};

const orderService = {
  getOrders,
};

export default orderService;

import axios from "axios";
import { base_url } from "../../utils/baseUrl";

const getColors = async () => {
  const response = await axios.get(`${base_url}color/`);

  console.log(response.data);

  return response.data;
};

const colorService = {
  getColors,
};

export default colorService;

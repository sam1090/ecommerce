import axios from "axios";
import { base_url } from "../../utils/baseUrl";

const getBrands = async () => {
  const response = await axios.get(`${base_url}brand`);

  console.log(response.data);

  return response.data;
};

const brandService = {
  getBrands,
};

export default brandService;

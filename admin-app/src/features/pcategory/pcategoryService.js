import axios from "axios";
import { base_url } from "../../utils/baseUrl";

const getProductCategories = async () => {
  const response = await axios.get(`${base_url}category`);

  console.log("cat",response.data);

  return response.data;
};

const productCategoryService = {
  getProductCategories,
};

export default productCategoryService;

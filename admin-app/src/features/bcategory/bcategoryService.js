import axios from "axios";
import { base_url } from "../../utils/baseUrl";

const getBlogCategory = async () => {
  const response = await axios.get(`${base_url}blogcategory`);

  console.log(response.data);

  return response.data;
};

const blogCatService = {
  getBlogCategory,
};

export default blogCatService;

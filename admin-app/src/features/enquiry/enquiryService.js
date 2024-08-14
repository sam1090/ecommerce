

import axios from "axios";
import { base_url } from "../../utils/baseUrl";

const getEnquiry = async () => {
  const response = await axios.get(`${base_url}enquiry`);

  console.log(response.data);

  return response.data;
};

const enquiryService = {
  getEnquiry,
};

export default enquiryService;

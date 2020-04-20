import axios from "axios";

const url = "localhost:3000";

export const sendFormData = (body) => {
  console.log(body);
  return axios.post(`https://${url}/request`, body);
};

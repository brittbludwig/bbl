import axios from "axios";

const url = window.location.host;

export const sendFormData = (body) => {
  return axios.post(`${url}/2m-formmail.php`, body);
};

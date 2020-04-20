import axios from "axios";

const url = window.location.href;
const formattedUrl = url.split(".com");

export const sendFormData = (body) => {
  return axios.post(`${formattedUrl[0]}.com/2m-formmail.php`, body);
};

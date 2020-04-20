import axios from "axios";

export const sendFormData = (body) => {
  return axios.post("http://www.brittanyludwig.com/2m-formmail.php", body);
};

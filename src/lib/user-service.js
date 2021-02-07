import axios from "axios";

class User {
  constructor() {
    this.user = axios.create({
      baseURL: process.env.REACT_APP_API_URI,
      withCredentials: true,
    });
  }



  /* ADD EXISTING COMPANY */

  addCompany(invitationCode) {
    return this.user
    .post(`/add-company/${invitationCode}}`, {invitationCode})
    .then(({ data }) => data)
  }

}

const axiosRequestFunctions = new User();

export default axiosRequestFunctions;

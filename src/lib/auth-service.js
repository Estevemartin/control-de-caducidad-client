import axios from "axios";

class Auth {
  constructor() {
    this.auth = axios.create({
      baseURL: process.env.REACT_APP_API_URI,
      withCredentials: true,
    });
  }

  /* AUTHENTICATION */

  signup({ name, surname, password, email, repeatPassword }) {
    return this.auth
      .post("/signup", { name, surname, password, email, repeatPassword })
      .then(({ data }) => data);
  }

  login({ email, password }) {
    return this.auth
      .post("/login", { email, password })
      .then(({ data }) => data);
  }

  logout() {
    return this.auth.post("/logout", {}).then(({ data }) => data);
  }

  me() {
    return this.auth.get("/me").then((response) => response.data);
  }


  

}



const axiosRequestFunctions = new Auth();

export default axiosRequestFunctions;

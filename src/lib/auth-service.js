import axios from "axios";

class Auth {
  constructor() {
    this.auth = axios.create({
      baseURL: process.env.REACT_APP_API_URI,
      withCredentials: true,
    });
  }

  /* AUTHENTICATION */

  signup({ name, surname, password, email }) {
    return this.auth
      .post("/signup", { name, surname, password, email })
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


  /* USER DETAILS */

editUser = async({name, surname, email, password }) => {
  try {
      const modifiedUser = await this.auth.put(`/profile/edit`, {name, surname, email, password})
      return modifiedUser.data
  } catch (error) {
      console.log(error)
  }
}

}



const axiosRequestFunctions = new Auth();

export default axiosRequestFunctions;

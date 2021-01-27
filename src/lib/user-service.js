import axios from "axios";

class User {
  constructor() {
    this.user = axios.create({
      baseURL: process.env.REACT_APP_API_URI,
      withCredentials: true,
    });
  }



  /* USER DETAILS */

editUser = async({firstName, surname, email, password }) => {
    try {
        const modifiedUser = await this.user.put(`/profile/edit`, {firstName, surname, email, password})
        return modifiedUser.data
    } catch (error) {
        console.log(error)
    }
  }

}

const axiosRequestFunctions = new User();

export default axiosRequestFunctions;

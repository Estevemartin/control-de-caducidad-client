import axios from "axios";

class Company {
  constructor() {
    this.company = axios.create({
      baseURL: process.env.REACT_APP_API_URI,
      withCredentials: true,
    });
  }

  /* CREATE COMPANY */

  createCompany = async({ companyName, responsible, respName, email, invitationCode}) =>{
    try {
      const newCompany = this.company.post(`/add-company`,{ companyName, responsible, respName, email, invitationCode })
      return newCompany.data
    } catch (error) {
      console.log(error)
    }
  }

  getCompany = async({ companyName, responsible, respName, email, invitationCode}) =>{
    try {
      const theCompany = this.company.post(`/get-company`,{ companyName, responsible, respName, email, invitationCode} )
      return theCompany.data
    } catch (error) {
      console.log(error)
    }
  }

}

const axiosRequestFunctions = new Company();

export default axiosRequestFunctions;
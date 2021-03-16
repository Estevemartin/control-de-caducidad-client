import axios from "axios";

class Company {
  constructor() {
    this.company = axios.create({
      baseURL: process.env.REACT_APP_API_URI,
      withCredentials: true,
    });
  }

  /* CREATE COMPANY */

  createCompany = async({companyName,respName,email,invitationCode}) =>{
    try {
      const newCompany = await this.company.post(`/add-company`,{companyName,respName,email,invitationCode})
      console.log(newCompany)
      return newCompany.data
    } catch (error) {
      console.log(error)
    }
  }

  /* GET COMPANY DETAILS */

  getCompany = async({ id }) =>{
    try {
      const theCompany = this.company.get(`/get-company/${id}`,{ id } )
      return theCompany.data
    } catch (error) {
      console.log(error)
    }
  }

  getCompanies(id) {
    return this.company
    .get(`/usercompanies/${id}`, {id})
    .then(({ data }) => data)
  }




}

const axiosRequestFunctions = new Company();

export default axiosRequestFunctions;
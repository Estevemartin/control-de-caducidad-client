import axios from "axios";

class Auth {
  constructor() {
    this.auth = axios.create({
      baseURL: process.env.REACT_APP_API_URI,
      withCredentials: true,
    });
  }

  /* AUTHENTICATION */

  signup({ firstName, surname, password, email, repeatPassword }) {return this.auth.post("/signup", { firstName, surname, password, email, repeatPassword }).then(({ data }) => data)}
  login({ email, password }) {return this.auth.post("/login", { email, password }).then(({ data }) => data)}
  logout() {return this.auth.post("/logout", {}).then(({ data }) => data)  }
  sendAccountActivationEmail (email){return this.auth.post("/sendAccountActivationEmail",{email}).then(({data})=>data)}
  activateAccount(token){return this.auth.get("/activateAccount/"+token).then(({data})=>data)}
  sendResetPasswordEmail(email){return this.auth.post("/sendResetPasswordEmail",{email}).then(({data})=>data)}
  saveNewPassword(id, password){return this.auth.post("/saveNewPassword/"+id,{password}).then(({data})=>data)}
  saveNewPasswordFromSettings(id, name, surname, email,password,newPassword){return this.auth.post("/saveNewPasswordFromSettings",{id,name, surname, email, password,newPassword}).then(({data})=>data)}
  getUserInfo(id){return this.auth.post("/getUserInfo",{id}).then(({data})=>data)}
  me() {return this.auth.get("/me").then((response) => response.data);}
  getCompanyDetails(id){return this.auth.post("/getCompanyDetails",{id}).then(({data})=>data)}
  createNewItem(itemName, itemResponsibleName, itemResponsibleEmail, validityPeriodValue, validityPeriodUnits, noticePeriodValue, noticePeriodUnits, companyId){
    return this.auth.post("/createNewItem",{itemName, itemResponsibleName, itemResponsibleEmail, validityPeriodValue, validityPeriodUnits, noticePeriodValue, noticePeriodUnits, companyId}).then(({data})=>data)}
  getItemDetails(itemId){return this.auth.post("/getItemDetails",{itemId}).then(({data})=>data)}
  // getCompanEmployees(companyId){return this.auth.post("/getCompanyEmployees",{companyId}).then(({data})=>data)}
  addEmployee(name,surname,email,companyId){return this.auth.post("/addEmployee",{name,surname,email,companyId}).then(({data})=>data)}
}



const axiosRequestFunctions = new Auth();

export default axiosRequestFunctions;

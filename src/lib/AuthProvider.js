import Spinner from '../Components/Spinner.jsx';
import React, { Component } from "react";
import auth from "./auth-service"; 
const { Consumer, Provider } = React.createContext();


const withAuth = (WrappedComponent) => {
  return class extends Component {
    render() {
      return (
        <Consumer>
          {({login,
          signup,
          user,
          logout,
          isLoggedin,
          sendAccountActivationEmail,
          activateAccount,
          sendResetPasswordEmail,
          saveNewPassword,
          saveNewPasswordFromSettings,
          getUserInfo,
          getCompanyDetails,
          createNewItem,
          getItemDetails
          }) => {
            return (
              <WrappedComponent
                login={login}
                signup={signup}
                user={user}
                logout={logout}
                isLoggedin={isLoggedin}
                sendAccountActivationEmail={sendAccountActivationEmail}
                activateAccount={activateAccount}
                sendResetPasswordEmail={sendResetPasswordEmail}
                saveNewPassword={saveNewPassword}
                saveNewPasswordFromSettings={saveNewPasswordFromSettings}
                getUserInfo={getUserInfo}
                getCompanyDetails={getCompanyDetails}
                createNewItem={createNewItem}
                getItemDetails={getItemDetails}
                {...this.props}
              />
            );
          }}
        </Consumer>
      );
    }
  };
};

class AuthProvider extends Component {
  state = {
    isLoggedin: false,
    user: null,
    isLoading: true,
    errorMsg:null,
    emailToActivate:null
  };

  componentDidMount() {
    auth
      .me()
      .then((user) =>
        this.setState({ isLoggedin: true, user: user, isLoading: false })
      )
      .catch((err) =>
        this.setState({ isLoggedin: false, user: null, isLoading: false })
      );
  }
  signup = async (user) => {
    const {firstName, surname, password, email} = user;
    try {
      const user = await auth.signup({ firstName, surname, password, email })
      if (!user.errorMsg){
        return true
      }else{
        return user.errorMsg
      }
    } catch(error){
      console.log(error)
    }
  }
  login = async (user) => {
    const { email, password } = user;
    try {
      const user = await auth.login({ email, password })
      if (!user.errorMsg){
        this.setState({ isLoggedin: true, user});
      } else {
        return user.errorMsg
      }
    } catch (error) {
      console.log(error);
    }
  }
  logout = async () => {
    try {
      await auth.logout();
      this.setState({ isLoggedin: false, user: null });
    } catch (error) {
      console.log(error);
    }
  }
  sendAccountActivationEmail = async (email) =>{
    try{
      const emailSent = await auth.sendAccountActivationEmail(email)
      if (emailSent.errorMsg){
        return emailSent.errorMsg
      } else {
        return emailSent
      }
    }catch(err){
      console.log(err)
    }
  }
  activateAccount = async (token) =>{
    try{
      await auth.activateAccount(token)
    }catch(err){
      console.log(err)
    }
  }
  sendResetPasswordEmail = async (email) =>{
    try{
      const emailSent = await auth.sendResetPasswordEmail(email)
      if (emailSent.errorMsg!==undefined){
        return emailSent.errorMsg
      }
    }catch(err){
      console.log(err)
    }

  }
  saveNewPassword = async (id,password) =>{
    try{
      const userUpdated = await auth.saveNewPassword(id,password)
      if (userUpdated.errorMsg){
        return userUpdated.errorMsg
      } else {
        return userUpdated
      }
    }catch(err){
      console.log(err)
    }

  }
  saveNewPasswordFromSettings = async (id,name, surname, email,password,newPassword) =>{
    try{
      const userUpdated = await auth.saveNewPasswordFromSettings(id,name, surname, email,password,newPassword)
      // if (userUpdated.errorMsg){
      //   return userUpdated.errorMsg
      // } else {
        return userUpdated
      // }
    }catch(err){
      console.log(err)
    }

  }
  getUserInfo = async id =>{
    try{
      const user = await auth.getUserInfo(id)
      this.setState({user:user})
      return user
    }catch(err){
      console.log(err)
    }
  }
  getCompanyDetails = async id =>{
    try{
      const company = await auth.getCompanyDetails(id)
      this.setState({company:company})
      return company
    }catch(err){
      console.log(err)
    }
  }
  createNewItem = async (itemName, itemResponsibleName, itemResponsibleEmail, validityPeriodValue, validityPeriodUnits, noticePeriodValue, noticePeriodUnits, companyId)=>{
    try{
      // console.log("INSIDE AUTH PROVIDER")
      const status = await auth.createNewItem(itemName, itemResponsibleName, itemResponsibleEmail, validityPeriodValue, validityPeriodUnits, noticePeriodValue, noticePeriodUnits, companyId)
      return status
    }catch(err){
      console.log(err)
    }
  }
  getItemDetails = async (itemId) =>{
    try{
      const status = await auth.getItemDetails(itemId)
      return status
    }catch(err){
      console.log(err)
    }
  }

  render() {
    const { isLoading, isLoggedin, user } = this.state;
    const {
      login,
      logout,
      signup,
      sendAccountActivationEmail,
      activateAccount,
      sendResetPasswordEmail,
      saveNewPassword,
      saveNewPasswordFromSettings,
      getUserInfo,
      getCompanyDetails,
      createNewItem,
      getItemDetails
    } = this;

    return isLoading ? (
      <div><Spinner/></div>
    ) : (
      <Provider value={{
        isLoggedin,
        user,
        login,
        logout,
        signup,
        sendAccountActivationEmail,
        activateAccount,
        sendResetPasswordEmail,
        saveNewPassword,
        saveNewPasswordFromSettings,
        getUserInfo,
        getCompanyDetails,
        createNewItem
        ,getItemDetails
        }}>
        {this.props.children}
      </Provider>
    );
  }
}

export { Consumer, withAuth };
export default AuthProvider;
import './App.css';
import {Switch, Route} from 'react-router-dom';
import AuthProvider from './lib/AuthProvider'
import AnonRoute from "../src/Components/componentRoutes/AnonRoute";
import PrivateRoute from "../src/Components/componentRoutes/PrivateRoute";

import Login from './pages/auth/Login';
import Logout from './pages/auth/Logout';
import Register from './pages/auth/Register';
import ForgotPassword from './pages/auth/ForgotPassword';
import ResetPassword from './pages/auth/ResetPassword';
import CheckInbox from './pages/auth/CheckInbox'; 
import AccountActivated from './pages/auth/AccountActivated'
import LandingCompanies from './pages/LandingCompanies';
import AddCompany from './pages/AddCompany';
import CreateCompanyDetails from './pages/CreateCompanyDetails'; 
import EditCompanyDetails from './pages/EditCompanyDetails'; 
import ProfileSettings from './pages/ProfileSettings'; 
import CompanyDetails from './pages/CompanyDetails';  
import EmployeeDetails from './pages/EmployeeDetails';  
import ItemDetails from './pages/ItemDetails';      
import Spinner from './Components/Spinner';


function App() {
  return (
    <AuthProvider>
    <div className="App">
      <main className="main" id="top">
        <Switch>
          <AnonRoute exact path="/" component={Login}/>
          <Route exact path="/logout" component={Logout}/>
          <AnonRoute exact path="/register" component={Register}/>
          <AnonRoute exact path="/forgotPassword" component={ForgotPassword}/>
          <AnonRoute exact path="/inbox-pass" component={CheckInbox}/>
          <AnonRoute exact path="/inbox-activate" component={CheckInbox}/>
          <AnonRoute exact path="/spinner" component={Spinner}/>
          <AnonRoute exact path="/activateAccount/:token" component={AccountActivated}/>
          <AnonRoute exact path="/resetPassword/:id" component={ResetPassword}/>
          <PrivateRoute exact path="/landing" component={LandingCompanies}/>
          <PrivateRoute exact path="/add-company" component={AddCompany}/>
          <PrivateRoute exact path="/create-company-details" component={CreateCompanyDetails}/>
          <PrivateRoute exact path="/edit-company/:id" component={EditCompanyDetails}/>
          <PrivateRoute exact path="/profile-settings" component={ProfileSettings}/>
          <PrivateRoute exact path="/user-menu-companies" component={LandingCompanies}/>
          <PrivateRoute exact path="/company-details/:id" component={CompanyDetails}/>
          <PrivateRoute exact path="/item-details/:id" component={ItemDetails}/>
          <PrivateRoute exact path="/employee-details/:id" component={EmployeeDetails}/>
        </Switch>
      </main>
    </div>
    </AuthProvider>
  );
}

export default App;

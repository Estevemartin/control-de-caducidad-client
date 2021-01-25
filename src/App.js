import './App.css';
import {Switch, Route, Redirect} from 'react-router-dom';
import AuthProvider from './lib/AuthProvider'
import AnonRoute from "../src/Components/componentRoutes/AnonRoute";
import PrivateRoute from "../src/Components/componentRoutes/PrivateRoute";

import Login from './pages/auth/Login';
import Logout from './pages/auth/Logout';
import Register from './pages/auth/Register';
import ForgotPassword from './pages/auth/ForgotPassword';
import ResetPassword from './pages/auth/ResetPassword';
import CheckInbox from './pages/auth/CheckInbox'; 
import LandingNoCompanies from './pages/LandingNoCompanies';
import LandingCompanies from './pages/LandingCompanies';
import AddCompany from './pages/AddCompany';
import CreateCompanyDetails from './pages/CreateCompanyDetails'; 
import EditCompanyDetails from './pages/EditCompanyDetails'; 
import ProfileSettings from './pages/ProfileSettings'; 
import CompanyDetails from './pages/CompanyDetails';  
import EmployeeDetails from './pages/EmployeeDetails';  
import ItemDetails from './pages/ItemDetails';      

import SideNavbar from './Components/navbars/SideNavbar';
import TopNavbar from './Components/navbars/TopNavbar';
import Spinner from './Components/Spinner';

function App() {
  return (
    <AuthProvider>
    <div className="App">
      <main className="main" id="top">
        <Switch>
        {/* Componentes sin navbar */}
        {/* <Redirect from exact path="/" to="/login"/> */}
        <AnonRoute exact path="/" component={Login}/>
        <AnonRoute exact path="/logout" component={Logout}/>
        <AnonRoute exact path="/register" component={Register}/>
        <AnonRoute exact path="/forgot" component={ForgotPassword}/>
        <AnonRoute exact path="/reset" component={ResetPassword}/>
        <AnonRoute exact path="/inbox-pass" component={CheckInbox}/>
        <AnonRoute exact path="/inbox-activate" component={CheckInbox}/>
        <AnonRoute exact path="/spinner" component={Spinner}/>
        
        {/* A partir de aquí, los componentes que hay llevarán la navbar */}
          <div className="container">
            <SideNavbar />
            <div className="content">
              <TopNavbar />
              <PrivateRoute exact path="/landing" component={LandingNoCompanies}/>
              <PrivateRoute exact path="/add-company" component={AddCompany}/>
              <PrivateRoute exact path="/create-company-details" component={CreateCompanyDetails}/>
              <PrivateRoute exact path="/edit-company" component={EditCompanyDetails}/>
              <PrivateRoute exact path="/profile-settings" component={ProfileSettings}/>
              <PrivateRoute exact path="/user-menu-companies" component={LandingCompanies}/>
              <PrivateRoute exact path="/company-details" component={CompanyDetails}/>
              <PrivateRoute exact path="/item-details" component={ItemDetails}/>
              <PrivateRoute exact path="/employee-details" component={EmployeeDetails}/>
            </div>
          </div>
        </Switch>
      </main>
    </div>
    </AuthProvider>
  );
}

export default App;

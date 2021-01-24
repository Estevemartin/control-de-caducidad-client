import './App.css';
import {Switch, Route, Redirect} from 'react-router-dom';
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
    <div className="App">
      <main className="main" id="top">
        <Switch>
        {/* Componentes sin navbar */}
        <Redirect from exact path="/" to="/login"/>
        <Route /*AnonRoute */ exact path="/login" component={Login}/>
        <Route /*AnonRoute*/ exact path="/logout" component={Logout}/>
        <Route /*AnonRoute*/ exact path="/register" component={Register}/>
        <Route /*AnonRoute*/ exact path="/forgot" component={ForgotPassword}/>
        <Route /*AnonRoute*/ exact path="/reset" component={ResetPassword}/>
        <Route /*AnonRoute*/ exact path="/inbox-pass" component={CheckInbox}/>
        <Route /*AnonRoute*/ exact path="/inbox-activate" component={CheckInbox}/>
        <Route /*AnonRoute*/ exact path="/spinner" component={Spinner}/>
        
        {/* A partir de aquí, los componentes que hay llevarán la navbar */}
          <div className="container">
            <SideNavbar />
            <div className="content">
              <TopNavbar />
              <Route /*PrivateRoute*/ exact path="/user-menu" component={LandingNoCompanies}/>
              <Route /*PrivateRoute*/ exact path="/add-company" component={AddCompany}/>
              <Route /*PrivateRoute*/ exact path="/create-company-details" component={CreateCompanyDetails}/>
              <Route /*PrivateRoute*/ exact path="/edit-company" component={EditCompanyDetails}/>
              <Route /*PrivateRoute*/ exact path="/profile-settings" component={ProfileSettings}/>
              <Route /*PrivateRoute*/ exact path="/user-menu-companies" component={LandingCompanies}/>
              <Route /*PrivateRoute*/ exact path="/company-details" component={CompanyDetails}/>
              <Route /*PrivateRoute*/ exact path="/item-details" component={ItemDetails}/>
              <Route /*PrivateRoute*/ exact path="/employee-details" component={EmployeeDetails}/>
            </div>
          </div>
        </Switch>
      </main>
    </div>
  );
}

export default App;

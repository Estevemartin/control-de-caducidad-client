import './App.css';
import {Switch, Route, Redirect} from 'react-router-dom';
import Login from './pages/auth/Login';
import Logout from './pages/auth/Logout';
import Register from './pages/auth/Register';
import ForgotPassword from './pages/auth/ForgotPassword';
import ResetPassword from './pages/auth/ResetPassword';
import CheckInbox from './pages/auth/CheckInbox'; 
import LandingNoCompanies from './pages/LandingNoCompanies'; 

import MenuAndNavbar from './Components/MenuAndNavbar';

function App() {
  return (
    <div className="App">
    {/* <MenuAndNavbar /> poner PrivateRoute cuando esté */}
      <Switch>
      <Redirect from exact path="/" to="/login"/>
      <Route /*AnonRoute */ exact path="/login" component={Login}/>
      <Route /*AnonRoute*/ exact path="/logout" component={Logout}/>
      <Route /*AnonRoute*/ exact path="/register" component={Register}/>
      <Route /*AnonRoute*/ exact path="/forgot" component={ForgotPassword}/>
      <Route /*AnonRoute*/ exact path="/reset" component={ResetPassword}/>
      <Route /*AnonRoute*/ exact path="/inbox-pass" component={CheckInbox}/>
      <Route /*AnonRoute*/ exact path="/inbox-activate" component={CheckInbox}/>
      <Route /*PrivateRoute*/ exact path="/menu" component={MenuAndNavbar}/>
      <Route /*PrivateRoute*/ exact path="/user-menu" component={LandingNoCompanies}/>

      </Switch>
    </div>
  );
}

export default App;

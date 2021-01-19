import './App.css';
import {Switch, Route, Redirect} from 'react-router-dom';
import Login from './pages/auth/Login';
import Logout from './pages/auth/Logout';
import Register from './pages/auth/Register';
import ForgotPassword from './pages/auth/ForgotPassword';
import ResetPassword from './pages/auth/ResetPassword';
import CheckInbox from './pages/auth/CheckInbox'; 
import MenuAndNavbar from './Components/MenuAndNavbar';

function App() {
  return (
    <div className="App">
    {/* <MenuAndNavbar /> poner withauth cuando esté */}
      <Switch>
      <Redirect from exact path="/" to="/login"/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/logout" component={Logout}/>
      <Route exact path="/register" component={Register}/>
      <Route exact path="/forgot" component={ForgotPassword}/>
      <Route exact path="/reset" component={ResetPassword}/>
      <Route exact path="/inbox-pass" component={CheckInbox}/>
      <Route exact path="/inbox-activate" component={CheckInbox}/>
      <Route exact path="/menu" component={MenuAndNavbar}/>
      </Switch>
    </div>
  );
}

export default App;

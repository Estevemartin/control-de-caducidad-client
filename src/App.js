import './App.css';
import {Switch, Route, Redirect} from 'react-router-dom';
import Login from './Components/auth/Login';
import Logout from './Components/auth/Logout';
import Register from './Components/auth/Register';
import ForgotPassword from './Components/auth/ForgotPassword';
import ResetPassword from './Components/auth/ResetPassword';
import CheckInbox from './Components/auth/CheckInbox'; 
import MenuAndNavbar from './Components/MenuAndNavbar';

function App() {
  return (
    <div className="App">
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

import './App.css';
import {Switch, Route, Redirect} from 'react-router-dom';
import Login from './Components/Login';
import Logout from './Components/Logout';
import Register from './Components/Register';
import ForgotPassword from './Components/ForgotPassword';
import ResetPassword from './Components/ResetPassword';
import CheckInbox from './Components/CheckInbox';

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
      </Switch>
    </div>
  );
}

export default App;

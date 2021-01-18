import './App.css';
import {Switch, Route} from 'react-router-dom';
import Login from './Components/Login';
import Logout from './Components/Logout';
import Register from './Components/Register';
import ForgotPassword from './Components/ForgotPassword';

function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/logout" component={Logout}/>
      <Route exact path="/register" component={Register}/>
      <Route exact path="/forgot" component={ForgotPassword}/>
      </Switch>
    </div>
  );
}

export default App;

import './App.css';
import {Switch, Route} from 'react-router-dom';
import Login from './Components/Login';

function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path="/" component={Login}/>
      </Switch>
    </div>
  );
}

export default App;

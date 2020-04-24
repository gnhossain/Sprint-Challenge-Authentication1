import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Login from './components/Login.js';
import Logout from './components/Logout';
import JokesList from "./components/JokesList";
import PrivateRoute from './components/PrivateRoute';
import './App.css';

function App() {
  return (
    <Router>
        <div className="App">
          <Switch>
            <PrivateRoute exact path="/protected" component={JokesList} />
            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout}/>
            <Route component={Login} />
            <Route component={Logout}/>
          </Switch>
        </div>
      </Router>
  );
}

export default App;

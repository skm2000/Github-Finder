import React from 'react';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import './App.css';
import Navbar from './components/layouts/Navbar';
import User from './components/users/User'
import Home from './components/pages/Home'
import Alert from './components/layouts/Alert'
import About from './components/pages/About';
import GithubState from './components/context/github/GithubState';
import AlertState from './components/context/alert/AlertState';
import NotFound from './components/pages/NotFound'


const App = () =>{
  return (
    <AlertState>
      <GithubState>
        <Router>
          <div className="App">
            <Navbar/>
            <div className="container">
              <Alert/>
              <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/about' component={About}/>
              <Route exact path='/user/:login' component={User}/>
              <Route component={NotFound}/>
              </Switch>
            </div>
          </div>
        </Router>
      </GithubState>
    </AlertState>
  ); 
}

export default App;

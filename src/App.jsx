import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Index from './assets/pages/index';
import SignIn from './components/SingninForm';
import SigninForm from './components/SingninForm';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={SigninForm} />
        <Route path="/" component={Index} />
      </Switch>
    </Router>
  );
}

export default App;

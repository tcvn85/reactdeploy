import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import Hello from './components/Hello';

function App() {
  return (

    <div className="App">
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/hello' component={Hello}/>
      </Switch>
    </div>
  );
}

export default App;

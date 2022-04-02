import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Form from './Form';
import Home from './Home';

function App() {


  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/Form" component={Form} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route
} from 'react-router-dom';

import Signup from './Signup';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Landing} />
          <Route path="/signup" component={Signup} />
        </div>
      </Router>
    );
  }
}

const Landing = () => (
  <div>
    <Link to="/signup">
      <button>Sign up</button>
    </Link>
  </div>
);
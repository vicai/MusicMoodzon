import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route
} from 'react-router-dom';

import Signup from './Signup';
import styles from './App.scss';

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

export const Landing = () => (
  <div className={styles.app}>
    <ConfirmationTop>
      <MusicLogo />
    </ConfirmationTop>
    <Link to="/signup">
      <SignUpButton />
    </Link>
  </div>
);

export const MusicLogo = () => (
  <img
    alt="Amazon Music Unlimited"
    src="https://images-na.ssl-images-amazon.com/images/G/01/digital/music/subs/AmazonMusicUnlimitedLogoBlue._CB506699034_.svg"
    className={styles.amazonMusicLogo}
    height="37px"
  />
);

export const ConfirmationTop = (props) => (
  <div className={styles.confirmationTop}>
    {props.children}
  </div>
);

export const SignUpButton = () => (
  <button className={styles.button}>Sign up</button>
);





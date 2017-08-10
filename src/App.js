import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route
} from 'react-router-dom';

import Choice from './components/Choice';
import LandingPage from './components/LandingPage';
import FacePage from './components/FacePage';
import EmojiPage from './components/EmojiPage';
import MotionPage from './components/MotionPage';
import styles from './App.scss';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Choice} />
          <Route path="/face" component={FacePage} />
          <Route path="/emoji" component={EmojiPage} />
          <Route path="/motion" component={MotionPage} />
        </div>
      </Router>
    );
  }
}

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





import WindowRedirect from 'react-redirect';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';

import Choice from './Choice';
import { moodSelector } from '../reducer';
import { playLists } from '../constants/PlayLists';
import styles from './FacePage.scss';
import WebcamCapture from './WebcamCapture';

export class FacePage extends Component {
  constructor(props) {
    super(props);
  
    this.onAmazonClick = this.onAmazonClick.bind(this);
    this.onContinueClick = this.onContinueClick.bind(this);
    this.onSongClick = this.onSongClick.bind(this);
    this.onSkipClick = this.onSkipClick.bind(this);
  }
  
  onAmazonClick() {
    const { mood } = this.props;
    const links = playLists.get(mood);
    window.location.assign(links[Math.floor(Math.random()*links.length)]);
  }
  
  onContinueClick() {
    <Link to='/emoji'></Link>
  }
  
  onSongClick() {
    const { mood } = this.props;
    
    const url = `http://cadad09c.ngrok.io/search?q=${mood}`;
    window.location.assign(url);
  }
  
  onSkipClick() {
    window.location.assign('http://localhost:3002/emoji');
  }
  
  render() {
    return (
      <div className={styles.facePage}>
        <WebcamCapture />
        <Choice
          className={styles.choiceButton}
          onAmazonClick={this.onAmazonClick}
          onSkipClick={this.onSkipClick}
          onSongClick={this.onSongClick}
        />
      </div>
    );
  }
}

const selector = createStructuredSelector({
  mood: moodSelector,
});

export default connect(selector, {
})(FacePage);
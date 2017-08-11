import { Link } from 'react-router-dom';
import React, { Component } from 'react';

import styles from './Choice.scss';

export default class Choice extends Component {
  render() {
    const { onContinueClick, onSkipClick, onAmazonClick, onSongClick } = this.props;
    
    return (
      <div className={styles.buttonGroup}>
        <div className={styles.right}>
            <button className={styles.button} onClick={onSkipClick}>Skip</button>
        </div>
        <div className={styles.left}>
          <button className={styles.button} onClick={onAmazonClick}>Amazon Playlist</button>
        </div>
        <div className={styles.left}>
          <button className={styles.button} onClick={onSongClick}>Song picked for you</button>
        </div>
      </div>
    );
  }
}

// <div className={styles.left}>
//   <button className={styles.button} onClick={onContinueClick}>Continue</button>
// </div>
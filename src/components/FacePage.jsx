import React, { Component } from 'react';

import Choice from './Choice';
import styles from './FacePage.scss';
import WebcamCapture from './WebcamCapture';

export default class FacePage extends Component {
  render() {
    return (
      <div className={styles.facePage}>
        	<div class={styles.webcamContainer}>
            <WebcamCapture />
          </div>
        <Choice className={styles.choiceButton} />
      </div>
    );
  }
}
import React, { Component } from 'react';

import Choice from './Choice';
import styles from './FacePage.scss';
import WebcamCapture from './WebcamCapture';

export default class FacePage extends Component {
  render() {
    return (
      <div className={styles.facePage}>
        	<div class="container" id="Cam">
    			<div id="my_camera">
	    			<WebcamCapture />
    			</div>
			</div>
        <Choice className={styles.choiceButton} />
      </div>
    );
  }
}
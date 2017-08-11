import React, { Component } from 'react';
import Webcam from 'react-webcam';
import { decode } from 'base64-arraybuffer';

import MusicMoodzonAPIUtils from '../utils/MusicMoodzonAPIUtils'
import styles from './WebcamCapture.scss';

export default class WebcamCapture extends React.Component {
  setRef = (webcam) => {
    this.webcam = webcam;
  }

  capture = () => {
    const imageSrc = decode(this.webcam.getScreenshot().substring(23).replace(' ', '+'));
    MusicMoodzonAPIUtils.sendImg(imageSrc).then((moodData) => {
      const mood = moodData.getIn(['data', 0, 'scores']).entrySeq().reduce((result, entry) => {
        if (entry[1] > result[1]) {
          result = entry;
        }
        return result;
      }, ['', 0]);
      console.log(mood[0]);
    });
  };

  render() {
    return (
      <div className={styles.camContainer}>
        <Webcam
          audio={false}
          height={500}
          ref={this.setRef}
          screenshotFormat="image/jpeg"
          width={500}/>
        <button className={styles.roundButton} onClick={this.capture}>Capture photo</button>
      </div>
    );
  }
}
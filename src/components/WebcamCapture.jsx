import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import React, { Component } from 'react';
import Webcam from 'react-webcam';
import { decode } from 'base64-arraybuffer';

import { addScreenshot, setMood } from '../action';
import {moodSelector, screenshotSelector} from '../reducer';
import MusicMoodzonAPIUtils from '../utils/MusicMoodzonAPIUtils'
import styles from './WebcamCapture.scss';

export class WebcamCapture extends React.Component {
  setRef = (webcam) => {
    this.webcam = webcam;
  }

  capture = () => {
    const screenshot = this.webcam.getScreenshot();
    this.props.addScreenshot({ screenshot });
    const imageSrc = decode(screenshot.substring(23).replace(' ', '+'));
    MusicMoodzonAPIUtils.sendImg(imageSrc).then((moodData) => {
      const dominateMoodEntry = moodData.getIn(['data', 0, 'scores']).entrySeq().reduce((result, entry) => {
        if (entry[1] > result[1]) {
          result = entry;
        }
        return result;
      }, ['', 0]);
      const mood = dominateMoodEntry[0];
      this.props.setMood({ mood });
    });
  };

  render() {
    const { mood, screenshot } = this.props;
    return (
      <div className={styles.camContainer}>
        <Webcam
          audio={false}
          height={300}
          ref={this.setRef}
          screenshotFormat="image/jpeg"
          width={300} />
        <button className={styles.roundButton} onClick={this.capture}>Capture photo</button>
        <div className={styles.imgContainer}>
          <img className={styles.img} src={screenshot} height={150} width={200}/>
        </div>
        <div>Mood: {mood}</div>
      </div>
    );
  }
}

const selector = createStructuredSelector({
  mood: moodSelector,
  screenshot: screenshotSelector,
});

export default connect(selector, {
  addScreenshot,
  setMood,
})(WebcamCapture);
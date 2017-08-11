import React, { Component } from 'react';
import Webcam from 'react-webcam';
import MusicMoodzonAPIUtils from '../utils/MusicMoodzonAPIUtils'

export default class WebcamCapture extends React.Component {
  setRef = (webcam) => {
    this.webcam = webcam;
  }

  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
    MusicMoodzonAPIUtils.sendImg(imageSrc);
  };

  render() {
    return (
      <div>
        <Webcam
          audio={false}
          height={350}
          ref={this.setRef}
          screenshotFormat="image/jpeg"
          width={350}/>
        <button onClick={this.capture}>Capture photo</button>
      </div>
    );
  }
}
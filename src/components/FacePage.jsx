import React, { Component } from 'react';

import Choice from './Choice';
import styles from './FacePage.scss';

export default class FacePage extends Component {
  render() {
    return (
      <div className={styles.facePage}>
        <div className={styles.placeholder}></div>
        <Choice className={styles.choiceButton} />
      </div>
    );
  }
}
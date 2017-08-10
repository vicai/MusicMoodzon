import React, { Component } from 'react';

import styles from './Choice.scss';

export default class Choice extends Component {
  render() {
    return (
      <div className={styles.buttonGroup}>
        <div className={styles.left}>
          <button className={styles.button}>Continue</button>
        </div>
        <div className={styles.right}>
          <button className={styles.button}>Skip</button>
        </div>
      </div>
    );
  }
}
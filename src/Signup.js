import { ConfirmationTop, MusicLogo } from './App';
import React, { Component } from 'react';

import FreeBeeAPIUtils from './utils/FreeBeeAPIUtils';
import styles from './Signup.scss';

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNumber: '',
      entity: null,
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event) {
    const num = event.target.value.replace(/\D/g,'');
    const formatNum = '(' + num.substring(0,3) + ')' + num.substring(3,6) + '-' + num.substring(6,10);
    this.setState({
      entity: null,
      phoneNumber: formatNum,
    });
  }
  
  handleSubmit(event) {
    event.preventDefault();
    const { entity, phoneNumber } = this.state;
    if (entity) {
      window.open('https://dev-dsk-weiqic-2a-89f06899.us-west-2.amazon.com:8443/unlimited/signup');
    }
    FreeBeeAPIUtils.getAccessToken().then(token => {
      FreeBeeAPIUtils.checkFreeBeeEligibility(token, phoneNumber.replace(/\D/g,'')).then(entity => {
        this.setState({ entity });
      });
    });
  }
  
  render() {
    const { phoneNumber, entity } = this.state;
    
    return (
      <div className={styles.signup}>
        <ConfirmationTop>
          <MusicLogo />
        </ConfirmationTop>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <label className={styles.label}>Please fill in your phone number:</label>
            <input
              className={styles.input}
              onChange={this.handleChange}
              placeholder="ex. 1(111)-111-1111"
              size="30"
              type="tel"
              value={phoneNumber}
            >
            </input>
          <input
            className={styles.confirm}
            type="submit"
            value={entity !== null ? 'Go unlimited' : 'Submit'}
          />
        </form>
        {entity && <div className={styles.eligibleInfo}>Yeah, you are eligible for 1Gb Freebee Data!</div>}
        {entity === false && <div className={styles.ineligibleInfo}>Sorry, you are not eligible for freebee benefit, but you can still go unlimited</div>}
      </div>
    );
  }
}
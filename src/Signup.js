import React, { Component } from 'react';

import FreeBeeAPIUtils from './utils/FreeBeeAPIUtils';

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNumber: '',
      entity: false,
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event) {
    this.setState({ phoneNumber: event.target.value});
  }
  
  handleSubmit(event) {
    event.preventDefault();
    const { phoneNumber } = this.state;
    FreeBeeAPIUtils.getAccessToken().then(token => {
      FreeBeeAPIUtils.checkFreeBeeEligibility(token, phoneNumber).then(entity => {
        this.setState({ entity });
      });
    });
  }
  
  render() {
    const { phoneNumber, entity } = this.state;
    
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Phone Number:
            <input
              onChange={this.handleChange}
              placeholder="please enter your phone number"
              size="30"
              value={phoneNumber}
            >
            </input>
          </label>
          <input
            type="submit"
            value={entity ? 'redeem' : 'submit'}
          />
        </form>
        {entity && <div>Congrats, you are eligible for 1Gb Freebee Data!</div>}
      </div>
    );
  }
}
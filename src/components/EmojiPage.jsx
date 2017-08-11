import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import EmojiReact from 'react-emoji-react';
import React, { Component } from 'react';

import Choice from './Choice';
import { emojiSelector } from '../reducer';
import Immutable from 'immutable';
import { playLists } from '../constants/PlayLists';
import { setEmojis } from '../action';
import styles from './EmojiPage.scss';

export class EmojiPage extends Component {
  constructor(props) {
    super(props);
    
    this.handleAmazonClick = this.handleAmazonClick.bind(this);
    this.handleSkip = this.handleSkip.bind(this);
    this.handleContinueClick = this.handleContinueClick.bind(this);
    this.handleSongClick = this.handleSongClick.bind(this);
  }
  
  handleAmazonClick() {
    const allMoods = Immutable.List(['anger', 'contempt', 'disgust', 'fear', 'neutral', 'happiness', 'love', 'sadness', 'surprise']);
    
    const { emojis } = this.props;
    
    const mood = emojis.filter(emoji => {
      if (emoji['name'] === 'angry') {
        emoji['name'] = 'anger';
      } else if (emoji['name'] === 'disappointed') {
        emoji['name'] = 'sadness';
      } else if (emoji['name'] === 'astonished') {
        emoji['name'] = 'surprise';
      } else if (emoji['name'] === 'blush') {
        emoji['name'] = 'love';
      } else if (emoji['name'] === 'smiley') {
        emoji['name'] = 'happiness';
      } else {
        emoji['name'] = 'neutral';
      }
  
      return allMoods.includes(emoji['name'])
    }).get(0)['name'] || 'happiness';
    
    const links = playLists.get(mood);
    window.location.assign(links[Math.floor(Math.random()*links.length)]);
  }
  
  handleSkip() {
    window.location.assign('http://localhost:3002/face');
  }
  
  handleContinueClick() {
  }
  
  handleSongClick() {
    const { emojis } = this.props;
    const mood = emojis.get(0)['name'];
  
    const url = `http://cadad09c.ngrok.io/search?q=${mood}`;
    window.location.assign(url);
  }
  
  onReaction(name) {
    const emojis = this.props.emojis.map(emoji => {
      if (emoji.name === name) {
        emoji.count += 1;
      }
      return emoji;
    });
    this.props.setEmojis({ emojis });
  }
  
  onEmojiClick(name) {
    console.log(name);
    const emojis = this.props.emojis.concat([{name, count: 1}]);
    this.props.setEmojis({ emojis });
  }
  
  render() {
    return (
      <div className={styles.emojiPage}>
        <div className={styles.emojiReact}>
          <EmojiReact
            reactions={this.props.emojis}
            onReaction={(name) => this.onReaction(name)}
            onEmojiClick={(name) => this.onEmojiClick(name)}
          />
        </div>
        <Choice
          className={styles.choiceButton}
          onAmazonClick={this.handleAmazonClick}
          onContinueClick={this.handleContinueClick}
          onSongClick={this.handleSongClick}
          onSkipClick={this.handleSkip}
        />
      </div>
    );
  }
}

const selector = createStructuredSelector({
  emojis: emojiSelector,
});

export default connect(selector, {
  setEmojis,
})(EmojiPage);
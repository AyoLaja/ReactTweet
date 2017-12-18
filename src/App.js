import React, { Component } from 'react';
import './App.css';
import Tweet from './components/Tweet';

class App extends Component {

  render() {
    let testTweet = {
      message: "Something about cats.",
      gravatar: "5da3266bcbfcf6139a2c69d920aee4ae?s=50",
      author: {
        handle: "catperson",
        name: "IAMA Cat Person"
      },
      likes: 5,
      retweets: 2,
      timestamp: "2017-12-12 23:59:37"
    };

    return (
      <div>
        <Tweet tweet={testTweet}/>
      </div>
    );
  }
}

export default App;

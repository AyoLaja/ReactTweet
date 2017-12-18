import React, { Component } from 'react';
import './App.css';
import Tweet from './components/Tweet';

class App extends Component {

  render() {
    let testTweet = {
      message: "Something about cats.",
      gravatar: "xyz",
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

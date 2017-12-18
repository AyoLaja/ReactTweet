import React from 'react';
import Avatar from '../components/Avatar';
import NameWithHandle from '../components/NameWithHandle';
import Message from '../components/Message';
import ReplyButton from '../components/ReplyButton';
import RetweetButton from '../components/RetweetButton';
import LikeButton from '../components/LikeButton';
import DirectMessage from '../components/DirectMessage';
import Time from '../components/Time';
import PropTypes from 'prop-types';

//Passed prop "tweet"
const Tweet = ({tweet}) => {
  return (
    <div className="tweet">
      <Avatar hash={tweet.gravatar}/>
      <div className="content">
        <NameWithHandle author={tweet.author}/><Time time={tweet.timestamp}/>
        <Message message={tweet.message}/>
        <div className="buttons">
          <ReplyButton />
          <RetweetButton count={tweet.retweets}/>
          <LikeButton count={tweet.likes}/>
          <DirectMessage />
        </div>
      </div>
    </div>
  );
}

//Don't think I need to repeat other props. Only gravatar needed?
Tweet.propTypes = {
  tweet: PropTypes.shape({
    message: PropTypes.string,
    gravatar: PropTypes.string,
    author: PropTypes.shape({
      name: PropTypes.string.isRequired,
      handle: PropTypes.string.isRequired
    }).isRequired,
    likes: PropTypes.number,
    retweets: PropTypes.number,
    time: PropTypes.string
  }).isRequired
};

export default Tweet;

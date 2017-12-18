import React from 'react';
import PropTypes from 'prop-types';

let getRetweeCount = (count) => {
  if (count > 0) {
    return(
      <i className="retweet-button">
        &nbsp;{count}
      </i>
    );
  }
  else {
    return null;
  }
}

const RetweetButton = ({count}) => (
  <i className="fa fa-retweet retweet-button">
    &nbsp;{getRetweeCount(count)}
  </i>
);

RetweetButton.propTypes = {
  count: PropTypes.number
};

export default RetweetButton;

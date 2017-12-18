import React from 'react';
import PropTypes from 'prop-types';

const LikeButton = ({count}) => {
  return(
    <i className="fa fa-heart-o like-button">
      &nbsp;{count > 0 ? count : null}
    </i>
  );
}

LikeButton.propTypes = {
  count: PropTypes.number
};

export default LikeButton;

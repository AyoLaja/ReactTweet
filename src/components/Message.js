import React from 'react';
import PropTypes from 'prop-types';

const Message = ({message}) => {
  return(
    <div className="message">
      {/*Arsenal 2 Tottenham 0. What a beautiful way to start my day!*/}
      {message}
    </div>
  );
}

Message.propTypes = {
  message: PropTypes.string
};

export default Message;

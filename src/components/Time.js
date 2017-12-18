import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

//Alternative method
//Time = () => <span className="time">3h ago</span>
const Time = ({time}) => {
  const timeString = moment(time).fromNow();
  return(
    <span className="time">
      {timeString}
    </span>
  );
}

Time.propTypes = {
  time: PropTypes.string
};

export default Time;

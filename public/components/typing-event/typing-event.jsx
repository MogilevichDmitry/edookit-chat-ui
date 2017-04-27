import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import './typing-event.less';

const TypingEvent = ({className, username}) => (
  <div className={classnames('typing-event', className)}>
    {username} is typing
    <span className="typing-event__dots">
      <span className="typing-event__dot">.</span>
      <span className="typing-event__dot">.</span>
      <span className="typing-event__dot">.</span>
    </span>
  </div>
);

TypingEvent.propTypes = {
  className: PropTypes.string,
  username: PropTypes.string
};

export default TypingEvent;

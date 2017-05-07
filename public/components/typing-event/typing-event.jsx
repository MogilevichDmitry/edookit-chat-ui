import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import './typing-event.less';

const TypingEvent = ({className, user}) => (
  <div className={classnames('typing-event', className)}>
    {`${user.name} ${user.family} is typing`}
    <span className="typing-event__dots">
      <span className="typing-event__dot">.</span>
      <span className="typing-event__dot">.</span>
      <span className="typing-event__dot">.</span>
    </span>
  </div>
);

TypingEvent.propTypes = {
  className: PropTypes.string,
  user: PropTypes.shape({
    name: PropTypes.string,
    family: PropTypes.family
  })
};

export default TypingEvent;

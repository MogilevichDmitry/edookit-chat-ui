import React from 'react';
import PropTypes from 'prop-types';

const MessagesDelimiter = ({title}) => (
  <div className="messages__delimiter">
    {title}
  </div>
)

MessagesDelimiter.propTypes = {
  title: PropTypes.string
}

export default MessagesDelimiter;

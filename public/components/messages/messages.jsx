import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import MessagesItem from './messages__item.jsx';
import MessagesDelimiter from './messages__delimiter.jsx';
import './messages.less';

const Messages = ({className}) => (
  <div className={classnames('messages', className)}>
    <MessagesItem />
    <MessagesItem />
    <MessagesItem />
    <MessagesItem />
    <MessagesItem />
    <MessagesItem />
    <MessagesItem />
    <MessagesDelimiter title="Today" />
    <MessagesItem />
    <MessagesItem />
  </div>
);

Messages.propTypes = {
  className: PropTypes.string
}

export default Messages;

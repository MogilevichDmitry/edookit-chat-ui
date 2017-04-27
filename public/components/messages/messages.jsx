import React from 'react';
import classnames from 'classnames';
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
    <MessagesDelimiter />
    <MessagesItem />
    <MessagesItem />
  </div>
);

export default Messages;

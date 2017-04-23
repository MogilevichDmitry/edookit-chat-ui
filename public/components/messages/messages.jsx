import React from 'react';
import MessagesItem from './messages__item.jsx';
import MessagesDelimiter from './messages__delimiter.jsx';
import './messages.less';

const Messages = () => (
  <div className="messages">
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

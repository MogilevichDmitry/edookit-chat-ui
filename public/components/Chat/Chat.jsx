import React from 'react';
import Aside from '../aside/aside.jsx';
import Conversation from '../conversation/conversation.jsx';
import './Chat.less';

const Chat = () => (
  <div className="chat">
    <Aside />
    <Conversation />
  </div>
);

export default Chat;

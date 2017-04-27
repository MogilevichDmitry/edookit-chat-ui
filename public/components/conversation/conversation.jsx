import React from 'react';
import PropTypes from 'prop-types';
import SendForm from '../send-form/send-form.jsx';
import Messages from '../messages/messages.jsx';
import ConversationHeader from './conversation__header.jsx';
import ButtonExpandSide from '../button-expand-side/button-expand-side.jsx';
import data from '../../constants/conversation.data.js';
import './conversation.less';

//header
//messages
//send form

const Conversation = () => (
  <div className="conversation">
    <ConversationHeader
      group={data.group}
      channel={data.channel}
      user={data.user}
    />
    <ButtonExpandSide className="conversation__button-expand-side" />
    <Messages className="conversation__messages" />
    <div style={{position: 'absolute', bottom: '10px', width: '100%', padding: '0 20px'}}>
      <SendForm />
      <div className="conversation__typing typing">
        {data.user} is typing...
      </div>
    </div>
  </div>
)

 export default Conversation;

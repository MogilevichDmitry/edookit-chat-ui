import React from 'react';
import PropTypes from 'prop-types';
import SendForm from '../send-form/send-form.jsx';
import Messages from '../messages/messages.jsx';
import ConversationHeader from './conversation__header.jsx';
import ButtonExpandSide from '../button-expand-side/button-expand-side.jsx';
import TypingEvent from '../typing-event/typing-event.jsx';
import data from '../../data/conversation.data.js';
import './conversation.less';

const Conversation = () => (
  <div className="conversation">
    <ConversationHeader
      group={data.group}
      channel={data.channel}
      user={data.user}
    />
    <ButtonExpandSide className="conversation__button-expand-side" />
    <Messages className="conversation__messages" />
    <div className="conversation__send-field">
      <SendForm />
      <TypingEvent className="conversation__typing" username={data.user}/>
    </div>
  </div>
)

 export default Conversation;

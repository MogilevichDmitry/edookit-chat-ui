import React from 'react';
import PropTypes from 'prop-types';
import { Scrollbars } from 'react-custom-scrollbars';
import SendForm from '../send-form/send-form.jsx';
import Messages from '../messages/messages.jsx';
import ConversationHeader from './conversation__header.jsx';
import ConversationFooter from './conversation__footer.jsx';
import ButtonExpandSide from '../button-expand-side/button-expand-side.jsx';
import TypingEvent from '../typing-event/typing-event.jsx';
import data from '../../data/conversation.data.js';
import './conversation.less';

class Conversation extends React.Component {


  componentDidMount() {
    const {scrollbars} = this.refs;
    const scrollHeight = scrollbars.getScrollHeight();
    scrollbars.scrollTop(scrollHeight);
  }

  render() {
    const {user, group, channel, toggleAside} = this.props;

    return (
      <div className="conversation">
        <ConversationHeader
          group={group}
          channel={channel}
          user={user}
          toggleAside={toggleAside}
        />
        <ButtonExpandSide className="conversation__button-expand-side" />
        <Scrollbars ref="scrollbars" style={{height: '100%'}}>
          <Messages className="conversation__messages" />
        </Scrollbars>
        <div className="conversation__send-field">
          <SendForm />
          <TypingEvent className="conversation__typing" user={user}/>
        </div>
        <ConversationFooter />
      </div>
    )
  }
}

Conversation.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    family: PropTypes.tring
  }),
  group: PropTypes.string,
  channel: PropTypes.string,
  toggleAside: PropTypes.func
}

 export default Conversation;

import React from 'react';
import classnames from 'classnames';
import Aside from '../aside/aside.jsx';
import Conversation from '../conversation/conversation.jsx';
import data from '../../data/chat.data.js';
import './Chat.less';

export default class Chat extends React.Component {
  constructor() {
    super();

    this.state = {
      isAsideVisible: false
    }

    this.toggleAside = this.toggleAside.bind(this);
  }

  toggleAside() {
    this.setState({isAsideVisible: !this.state.isAsideVisible});
  }

  render() {

    return (
      <div className={classnames({
          'chat': true,
          'chat_hide-aside': !this.state.isAsideVisible
      })}>
        <Aside/>
        <Conversation
          user={data.user}
          channel={data.channel}
          group={data.group}
          toggleAside={this.toggleAside}
          isAsideVisible={this.state.isAsideVisible}
        />
      </div>
    );
  }
}

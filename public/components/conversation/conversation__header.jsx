import React from 'react';
import PropTypes from 'prop-types';
import ButtonCall from '../button-call/button-call.jsx';
import ButtonSearch from '../button-search/button-search.jsx';
import ButtonMenu from '../button-menu/button-menu.jsx';
import ButtonNotification from '../button-notification/button-notification.jsx';

const ConversationHeader = ({group, channel, user}) => (
  <div className="conversation__header">
    <h1 className="conversation__header-title">
      {`${group} / ${channel}`}
    </h1>
    <ButtonCall className="conversation__header-button-call" />
    <div className="conversation__header-controls">
      <ButtonSearch className="conversation__header-button-search" />
      <ButtonMenu className="conversation__header-button-menu" />
      <ButtonNotification className="conversation__header-button-notification" />
      <div className="conversation__header-username">
        {user}
      </div>
    </div>
  </div>
)

ConversationHeader.propTypes = {
  group: PropTypes.string,
  channel: PropTypes.string,
  user: PropTypes.string
}

export default ConversationHeader;

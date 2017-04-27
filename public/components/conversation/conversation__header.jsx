import React from 'react';
import PropTypes from 'prop-types';
import ButtonCall from '../button-call/button-call.jsx';
import ButtonSearch from '../button-search/button-search.jsx';
import ButtonMenu from '../button-menu/button-menu.jsx';
import ButtonNotification from '../button-notification/button-notification.jsx';

const ConversationHeader = ({group, channel, user}) => (
  <div className="conversation__header">
    <div className="conversation__header-headings">
      <h1 className="conversation__header-title">
        {group} / {channel}
      </h1>
    </div>
    <ButtonCall />
    <div className="conversation__header-controls">
      <ButtonSearch />
      <ButtonMenu />
      <ButtonNotification />
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

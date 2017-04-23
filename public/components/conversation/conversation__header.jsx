import React from 'react';
import PropTypes from 'prop-types';

const ConversationHeader = ({group, channel, user}) => (
  <div className="conversation__header">
    <div className="conversation__header-headings">
      <h1 className="conversation__header-title">
        {group}
      </h1>
      <h2 className="conversation__header-second-title">
        {channel}
      </h2>
    </div>
    <div className="conversation__header-controls">
      <div>search</div>
      <div>menu</div>
      <div>notif</div>
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

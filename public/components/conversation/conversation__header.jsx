import React from 'react';
import PropTypes from 'prop-types';
import ButtonCall from '../button-call/button-call.jsx';
import UserControls from '../user-controls/user-controls.jsx';
import Icon from '../icon/icon.jsx';
import IconDiscussions from '!raw-loader!../../resources/icons/icon-discussions.svg';

const ConversationHeader = ({group, channel, user, toggleAside}) => (
  <div className="conversation__header">
    <button className="conversation__header-button-aside" onClick={() => toggleAside()}>
      <Icon svg={IconDiscussions} />
    </button>
    <h1 className="conversation__header-title">
      {`${group} / ${channel}`}
    </h1>
    <ButtonCall className="conversation__header-button-call" />
    <UserControls
      className="conversation__header-controls"
      user={user}
      isSearch={true}
    />
  </div>
)

ConversationHeader.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    family: PropTypes.string
  }),
  group: PropTypes.string,
  channel: PropTypes.string,
  toggleAside: PropTypes.func
}

export default ConversationHeader;

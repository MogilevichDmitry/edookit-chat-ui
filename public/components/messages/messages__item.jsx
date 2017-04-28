import React from 'react';
import PropTypes from 'prop-types';
import UserPic from '../../resources/images/user.png';

const MessagesItem = ({data}) => (
  <div className="messages__item">
    <img src={UserPic} className="messages__item-img" />
    <div className="messages__item-main">
      <div className="messages__item-header">
        <span className="messages__item-username">
          {data.username}
        </span>
        <span className="messages__item-time">
          {data.time}
        </span>
      </div>
      <div className="messages__item-text">
        {data.text}
      </div>
    </div>
  </div>
);
export default MessagesItem;

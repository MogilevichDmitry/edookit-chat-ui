import React from 'react';
import PropTypes from 'prop-types';
import UserPic from '../../resources/images/user.png';

const MessagesItem = () => (
  <div className="messages__item">
    <img src={UserPic} className="messages__item-img" />
    <div className="messages__item-main">
      <div className="messages__item-header">
        <span className="messages__item-username">
          David Lang
        </span>
        <span className="messages__item-time">
          [11:08 AM]
        </span>
      </div>
      <div className="messages__item-text">
        blablabla
      </div>
    </div>
  </div>
);
export default MessagesItem;

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Attachment from '../attachment/attachment.jsx';
import UserPic from '../../resources/images/user.png';

const MessagesItem = ({data}) => {
  let isOwnMessage;
  let isDelimiter;

  if (data.modifiers) {
    isOwnMessage = data.modifiers.indexOf('ownMessage') > -1;
    isDelimiter = data.modifiers.indexOf('delimiter') > -1;
  }

  if (!isDelimiter) {
    return (
      <div className={classnames({
          'messages__item': true,
          'messages__item_ownMessage': isOwnMessage
      })}>
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
          {
            data.attachments &&
            <div className="messages__item-attachments">
              {data.attachments.map(attachment =>
                <Attachment
                  className="messages__item-attachments-file"
                  data={attachment}
                  key={attachment.id}
                />
              )}
            </div>
          }
        </div>
      </div>
    )
  } else if (isDelimiter) {
    return (
      <div className="messages__item messages__item_delimiter">
        {data.title}
      </div>
    )
  }
};

MessagesItem.propTypes = {
  data: PropTypes.shape({
    username: PropTypes.string,
    time: PropTypes.string,
    text: PropTypes.string,
    title: PropTypes.string,
    modifiers: PropTypes.array
  })
}

export default MessagesItem;

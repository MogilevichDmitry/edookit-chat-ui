import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import MessagesItem from './messages__item.jsx';
import './messages.less';

import data from '../../data/messages.data.js';

const Messages = ({className}) => (
  <div className={classnames('messages', className)}>
    {data.map((item) => {
      return <MessagesItem key={item.id} data={item} />
    })}
  </div>
);

Messages.propTypes = {
  className: PropTypes.string
}

export default Messages;

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import AlertCount from '../alert-count/alert-count.jsx';

const ChannelsListItem = ({data}) => {
  let isActive, isAlert;

  if (data.modifiers) {
    isActive = data.modifiers.indexOf('active') > -1;
    isAlert = data.modifiers.indexOf('alert') > -1;
  }

  return (
    <li className={classnames({
      'channels-list__item': true,
      'channels-list__item_alert': isAlert,
      'channels-list__item_active': isActive
    })}>
      <AlertCount className="channels-list__item-icon" count={3}/>
      <span className="channels-list__item-icon icon-peoples"></span>
      <span className="channels-list__item-title">{data.title}</span>
    </li>
  );
}

ChannelsListItem.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    modifiers: PropTypes.array
  })
};

export default ChannelsListItem;

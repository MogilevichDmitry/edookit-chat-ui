import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import AlertCount from '../alert-count/alert-count.jsx';

import userPic from '../../resources/images/user.png';

const PeopleListItem = ({data}) => {
  let isActive, isAlert;

  if (data.modifiers) {
    isActive = data.modifiers.indexOf('active') > -1;
    isAlert = data.modifiers.indexOf('alert') > -1;
  }

  return (
    <li className={classnames({
      'people-list__item': true,
      'people-list__item_alert': isAlert,
      'people-list__item_active': isActive
    })}>
      <img src={userPic} className="people-list__item-photo" alt="user photo" />
      <span className="people-list__item-title">{data.title}</span>
      <AlertCount className="people-list__item-alert-count" count={2}/>
    </li>
  );
}

PeopleListItem.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    modifiers: PropTypes.array
  })
};

export default PeopleListItem;

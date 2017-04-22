import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const GroupsListItem = ({data}) => {
  let isActive, isAlert;

  if (data.modifiers) {
    isActive = data.modifiers.indexOf('active') > -1;
    isAlert = data.modifiers.indexOf('alert') > -1;
  }

  return (
    <li className="groups-list__item">
      <button className={classnames({
        'groups-list__item-btn': true,
        'groups-list__item-btn_alert': isAlert,
        'groups-list__item-btn_active': isActive,
      })}>
        {data.title}
      </button>
    </li>
  );
}

GroupsListItem.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    modifiers: PropTypes.array
  })
};

export default GroupsListItem;

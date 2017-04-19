import React from 'react';
import classnames from 'classnames';

class GroupsListItem extends React.Component {
  render() {
    const {title, isAlert, isActive} = this.props;
    return(
      <li className="groups-list__item">
        <button className={classnames({
            'groups-list__item-btn': true,
            'groups-list__item-btn_alert': isAlert,
            'groups-list__item-btn_active': isActive,
          })}>
            {title}
          </button>
      </li>
    );
  }
}

export default GroupsListItem;

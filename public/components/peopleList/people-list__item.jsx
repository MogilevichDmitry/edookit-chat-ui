import React from 'react';
import classnames from 'classnames';

class PeopleListItem extends React.Component {
  render() {
    const {title, isAlert, isActive} = this.props;
    return(
      <li className="people-list__item people-list__item_alert">
        <img className="icon-users" src="./images/users.png" alt="users" />
        <span className="people-list__item-title">Jesus Cruz</span>
        <span className="people-list__item-icon alert-count">2</span>
      </li>
    );
  }
}

export default PeopleListItem;

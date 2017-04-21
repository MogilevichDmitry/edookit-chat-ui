import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import userPic from '../../images/user.png';

class PeopleListItem extends React.Component {
  render() {
    const {title} = this.props;
    return(
      <li className="people-list__item people-list__item_alert">
        <img src={userPic} className="icon-users" alt="users" />
        <span className="people-list__item-title">Jesus Cruz</span>
        <span className="people-list__item-icon alert-count">2</span>
      </li>
    );
  }
}

PeopleListItem.propTypes = {
  title: PropTypes.string
};

export default PeopleListItem;

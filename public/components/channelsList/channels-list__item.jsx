import React from 'react';
import classnames from 'classnames';

class ChannelsListItem extends React.Component {
  render() {
    const {title, isAlert, isActive} = this.props;
    return(
      <li className="channels-list__item channels__item_alert">
        <span className="channels-list__item-icon alert-count">2</span>
        <span className="channels-list__item-icon icon-peoples"></span>
        <span className="channels-list__item-title">{title}</span>
      </li>
    );
  }
}

export default ChannelsListItem;

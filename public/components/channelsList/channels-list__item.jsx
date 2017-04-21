import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class ChannelsListItem extends React.Component {
  render() {
    const {title} = this.props;
    return(
      <li className="channels-list__item channels-list__item_alert">
        <span className="channels-list__item-icon alert-count">2</span>
        <span className="channels-list__item-icon icon-peoples"></span>
        <span className="channels-list__item-title">{title}</span>
      </li>
    );
  }
}

ChannelsListItem.propTypes = {
  title: PropTypes.string
};

export default ChannelsListItem;

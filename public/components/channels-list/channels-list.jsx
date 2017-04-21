import React from 'react';
import PropTypes from 'prop-types';
import ChannelsListItem from './channels-list__item.jsx';

import './channel-list.less';

class ChannelsList extends React.Component {
  render() {
    const {data} = this.props;

    return(
      <ul className="channels-list">
        {data.map((title) => {
          return <ChannelsListItem key={title} title={title} />
        })}
      </ul>
    );
  }
}

ChannelsList.propTypes = {
  data: PropTypes.array
};

export default ChannelsList;

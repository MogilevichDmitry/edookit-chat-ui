import React from 'react';
import PropTypes from 'prop-types';
import ChannelsListItem from './channels-list__item.jsx';

import './channel-list.less';

const ChannelsList = ({data}) => (
  <ul className="channels-list">
    {data.map((item) => {
      return <ChannelsListItem key={item.title} data={item} />
    })}
  </ul>
);

ChannelsList.propTypes = {
  data: PropTypes.array
};

export default ChannelsList;

import React from 'react';
import ChannelsListItem from './channels-list__item.jsx';

export default class ChannelsList extends React.Component {
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

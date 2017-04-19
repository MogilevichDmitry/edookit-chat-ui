import React from 'react';
import GroupsListItem from './groups-list__item.jsx';

export default class GroupsList extends React.Component {
  render() {
    const {data} = this.props;

    return(
      <ul className="groups-list">
        {data.map((title) => {
          return <GroupsListItem key={title} title={title} />
        })}
      </ul>
    );
  }
}

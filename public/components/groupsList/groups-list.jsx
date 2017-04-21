import React from 'react';
import PropTypes from 'prop-types';
import GroupsListItem from './groups-list__item.jsx';

class GroupsList extends React.Component {
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

GroupsList.propTypes = {
  data: PropTypes.array
};

export default GroupsList;

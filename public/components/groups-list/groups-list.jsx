import React from 'react';
import PropTypes from 'prop-types';
import GroupsListItem from './groups-list__item.jsx';

import './groups-list.less';

const GroupsList = ({data}) => (
  <ul className="groups-list">
    {data.map((item) => {
      return <GroupsListItem key={item.title} data={item} />
    })}
  </ul>
)

GroupsList.propTypes = {
  data: PropTypes.array
};

export default GroupsList;

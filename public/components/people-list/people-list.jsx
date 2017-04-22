import React from 'react';
import PropTypes from 'prop-types';
import PeopleListItem from './people-list__item.jsx';

import './people-list.less';

const PeopleList = ({data}) => (
  <ul className="people-list">
    {data.map((item) => {
      return <PeopleListItem key={item.title} data={item} />
    })}
  </ul>
);

PeopleList.propTypes = {
  data: PropTypes.array
};

export default PeopleList;

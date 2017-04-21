import React from 'react';
import PropTypes from 'prop-types';
import PeopleListItem from './people-list__item.jsx';

class PeopleList extends React.Component {
  render() {
    const {data} = this.props;

    return(
      <ul className="people-list">
        {data.map((title) => {
          return <PeopleListItem key={title} title={title} />
        })}
      </ul>
    );
  }
}

PeopleList.propTypes = {
  data: PropTypes.array
};

export default PeopleList;

import React from 'react';
import PeopleListItem from './people-list__item.jsx';

export default class PeopleList extends React.Component {
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

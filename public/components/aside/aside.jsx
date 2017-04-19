import React from 'react';
import AsideItem from './aside__item.jsx';
import GroupsList from '../groupsList/groups-list.jsx';
import ChannelsList from '../channelsList/channels-list.jsx';
import PeopleList from '../peopleList/people-list.jsx';

import data from './aside.data.js';

export default class Aside extends React.Component {
  render() {
    return (
      <div className="aside">
        <AsideItem title="Groups">
          <GroupsList data={data.groupsList} />
        </AsideItem>
        <AsideItem title="Channels">
          <ChannelsList data={data.channelsList} />
        </AsideItem>
        <AsideItem title="People">
          <PeopleList data={data.peopleList} />
        </AsideItem>
      </div>
    );
  }
}

import React from 'react';
import AsideItem from './aside__item.jsx';
import GroupsList from '../groups-list/groups-list.jsx';
import ChannelsList from '../channels-list/channels-list.jsx';
import PeopleList from '../people-list/people-list.jsx';
import ButtonInvatePeople from '../button-invite-people/button-invite-people.jsx';

import data from './aside.data.js';
import './aside.less';

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
        <ButtonInvatePeople className="aside__button-invite-people" />
      </div>
    );
  }
}

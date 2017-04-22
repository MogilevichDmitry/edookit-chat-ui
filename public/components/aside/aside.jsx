import React from 'react';
import AsideItem from './aside__item.jsx';
import GroupsList from '../groups-list/groups-list.jsx';
import ChannelsList from '../channels-list/channels-list.jsx';
import PeopleList from '../people-list/people-list.jsx';
import ButtonInvatePeople from '../button-invite/button-invite.jsx';

import data from '../../constants/aside.data.js';
import './aside.less';

const Aside = () => (
  <div className="aside">
    <AsideItem title="Groups" isHeader={false}>
      <GroupsList data={data.groupsList} />
    </AsideItem>
    <AsideItem title="Channels">
      <ChannelsList data={data.channelsList} />
    </AsideItem>
    <AsideItem title="People">
      <PeopleList data={data.peopleList} />
    </AsideItem>
    <ButtonInvatePeople className="aside__button-invite" />
  </div>
);

export default Aside;

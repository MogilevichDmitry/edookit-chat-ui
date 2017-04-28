import React from 'react';
import AsideItem from './aside__item.jsx';
import GroupsList from '../groups-list/groups-list.jsx';
import ChannelsList from '../channels-list/channels-list.jsx';
import PeopleList from '../people-list/people-list.jsx';
import ButtonInvite from '../button-invite/button-invite.jsx';
import ButtonPlusCircle from '../button-plus-circle/button-plus-circle.jsx';
import ButtonMail from '../button-mail/button-mail.jsx';

import data from '../../data/aside.data.js';
import './aside.less';

const Aside = () => (
  <div className="aside">
    <AsideItem title="Groups" isHeader={false}>
      <GroupsList data={data.groupsList} />
    </AsideItem>
    <AsideItem
      title="Channels"
      headerButton={<ButtonPlusCircle className="aside__button-plus-circle" />}
    >
      <ChannelsList data={data.channelsList} />
    </AsideItem>
    <AsideItem title="People" headerButton={<ButtonMail />}>
      <PeopleList data={data.peopleList} />
    </AsideItem>
    <ButtonInvite className="aside__button-invite"/>
  </div>
);

export default Aside;

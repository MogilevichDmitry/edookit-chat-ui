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
          <ul className="people__list">
            <li className="people__item people__item_alert">
              <img className="icon-users" src="./images/users.png" alt="users" />
              <span className="people__item-title">Jesus Cruz</span>
              <span className="people__item-icon alert-count">2</span>
            </li>
            <li className="people__item people__item_alert">
              <img className="icon-users" src="./images/users.png" alt="users" />
              <span className="people__item-title">Sallie Lopez</span>
              <span className="people__item-icon alert-count">2</span>
            </li>
            <li className="people__item">
              <img className="icon-users" src="./images/users.png" alt="users" />
              <span className="people__item-title">Gregory Douglas</span>
              <span className="people__item-icon alert-count"></span>
            </li>
            <li className="people__item">
              <img className="icon-users" src="./images/users.png" alt="users" />
              <span className="people__item-title">Maude Franklin</span>
              <span className="people__item-icon alert-count"></span>
            </li>
            <li className="people__item">
              <img className="icon-users" src="./images/users.png" alt="users" />
              <span className="people__item-title">Lily Oliver</span>
              <span className="people__item-icon alert-count"></span>
            </li>
          </ul>
        </AsideItem>
      </div>
    );
  }
}

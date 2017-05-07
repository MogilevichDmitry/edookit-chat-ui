import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ButtonAppMenu from '../button-app-menu/button-app-menu.jsx';
import ButtonSearch from '../button-search/button-search.jsx';
import Notifications from '../notifications/notifications.jsx';
import ButtonUserMenu from '../button-user-menu/button-user-menu.jsx';
import './user-controls.less';

const UserControls = ({className, isSearch, alerts, user}) => (
  <div className={classnames('user-controls', className)}>
    {isSearch && <ButtonSearch className="user-controls__button-search" />}
    <ButtonAppMenu className="user-controls__button-app-menu" />
    <Notifications className="user-controls__notifications" alerts={alerts} />
    <div className="user-controls__username">
      {`${user.name} ${user.family}`}
    </div>
    <ButtonUserMenu className="user-controls__button-user-menu" />
  </div>
)

UserControls.propTypes = {
  className: PropTypes.string,
  isSearch: PropTypes.bool,
  alerts: PropTypes.number,
  user: PropTypes.shape({
    name: PropTypes.string,
    family: PropTypes.string
  })
}

UserControls.defaultProps = {
  isSearch: false
}

export default UserControls;

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './button-invite.less';

const ButtonInvite = ({className}) => (
  <button className={classnames('button-invite', className)}>
    <span className="button-invite__icon speaker-icon"></span>
    <span className="button-invite__title">Invite people</span>
  </button>
);

ButtonInvite.propTypes = {
  className: PropTypes.string
};

export default ButtonInvite;

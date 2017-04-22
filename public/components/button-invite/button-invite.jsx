import React from 'react';
import PropTypes from 'prop-types';

import './button-invite.less';

const ButtonInvatePeople = ({className}) => (
  <button className={`${className} button-invite`}>
    <span className="button-invite__icon speaker-icon"></span>
    <span className="button-invite__title">Invite people</span>
  </button>
);

ButtonInvatePeople.propTypes = {
  className: PropTypes.string
};

export default ButtonInvatePeople;

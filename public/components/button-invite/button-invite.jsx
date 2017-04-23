import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import SVGInline from 'react-svg-inline';
import IconSpeaker from '../../resources/icons/icon-speaker.svg';
import './button-invite.less';

const ButtonInvite = ({className}) => (
  <button className={classnames('button-invite', className)}>
    <SVGInline className="button-invite__icon" svg={IconSpeaker} />
    <span className="button-invite__title">Invite people</span>
  </button>
);

ButtonInvite.propTypes = {
  className: PropTypes.string
};

export default ButtonInvite;

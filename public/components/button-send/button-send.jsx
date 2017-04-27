import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '../icon/icon.jsx';
import IconSend from '!raw-loader!../../resources/icons/icon-send.svg';
import './button-send.less';

const ButtonSend = ({className, type}) => (
  <button className={classnames('button-send', className)} type={type}>
    <Icon svg={IconSend} />
  </button>
);

ButtonSend.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string
}

export default ButtonSend;

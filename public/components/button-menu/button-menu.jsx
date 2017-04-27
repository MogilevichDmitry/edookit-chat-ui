import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '../icon/icon.jsx';
import IconMenu from '!raw-loader!../../resources/icons/icon-menu.svg';
import './button-menu.less';

const ButtonMenu = ({className}) => (
  <button className={classnames('btn-menu', className)}>
    <Icon svg={IconMenu} />
  </button>
);

ButtonMenu.propTypes = {
  className: PropTypes.string
}

export default ButtonMenu;

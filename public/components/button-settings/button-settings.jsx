import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '../icon/icon.jsx';
import IconSettings from '!raw-loader!../../resources/icons/icon-settings.svg';
import './button-settings.less';

const ButtonSettings = ({className}) => (
  <button className={classnames('btn-settings', className)}>
    <Icon svg={IconSettings} />
  </button>
);

ButtonSettings.propTypes = {
  className: PropTypes.string
}

export default ButtonSettings;

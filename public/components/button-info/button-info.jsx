import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '../icon/icon.jsx';
import IconInfo from '!raw-loader!../../resources/icons/icon-info.svg';
import './button-info.less';

const ButtonInfo = ({className}) => (
  <button className={classnames('btn-info', className)}>
    <Icon svg={IconInfo} />
  </button>
);

ButtonInfo.propTypes = {
  className: PropTypes.string
}

export default ButtonInfo;

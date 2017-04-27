import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '../icon/icon.jsx';
import IconCall from '!raw-loader!../../resources/icons/icon-call.svg';
import './button-call.less';

const ButtonCall = ({className}) => (
  <button className={classnames('btn-call', className)}>
    <Icon svg={IconCall} />
  </button>
);

ButtonCall.propTypes = {
  className: PropTypes.string
}

export default ButtonCall;

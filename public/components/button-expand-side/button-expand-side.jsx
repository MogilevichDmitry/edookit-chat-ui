import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '../icon/icon.jsx';
import IconExpandSide from '!raw-loader!../../resources/icons/icon-expand-side.svg';
import './button-expand-side.less';

const ButtonExpandSide = ({className}) => (
  <button className={classnames('button-expand-side', className)}>
    <Icon svg={IconExpandSide} />
  </button>
);

ButtonExpandSide.propTypes = {
  className: PropTypes.string
}

export default ButtonExpandSide;

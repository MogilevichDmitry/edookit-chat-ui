import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '../icon/icon.jsx';
import IconPlusCircle from '!raw-loader!../../resources/icons/icon-plus-circle.svg';
import './button-plus-circle.less';

const ButtonPlusCircle = ({className, type, onClick}) => (
  <button className={classnames('btn-plus-circle', className)} type={type} onClick={onClick}>
    <Icon svg={IconPlusCircle} />
  </button>
);

ButtonPlusCircle.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string
}

ButtonPlusCircle.defaultProps = {
  type:'button',
  onClick: () => {}
}

export default ButtonPlusCircle;

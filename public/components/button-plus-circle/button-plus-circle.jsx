import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import SVGInline from 'react-svg-inline';
import IconPlusCircle from '../../resources/icons/icon-plus-circle.svg';
import './button-plus-circle.less';

const ButtonPlusCircle = ({className}) => (
  <button className={classnames('btn-plus-circle', className)}>
    <SVGInline svg={IconPlusCircle} />
  </button>
);

ButtonPlusCircle.propTypes = {
  className: PropTypes.string
}

export default ButtonPlusCircle;

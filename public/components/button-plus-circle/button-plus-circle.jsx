import React from 'react';
import PropTypes from 'prop-types';
import './button-plus-circle.less';

const ButtonPlusCircle = ({className, children}) => (
  <button className={`${className} btn-plus-circle`}>
    {children}
  </button>
);

ButtonPlusCircle.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}

export default ButtonPlusCircle;

import React from 'react';
import PropTypes from 'prop-types';
import './button-mail.less';

const ButtonPlusCircle = ({className, children}) => (
  <button className={`${className} button-mail`}>
    {children}
  </button>
);

ButtonPlusCircle.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}

export default ButtonPlusCircle;

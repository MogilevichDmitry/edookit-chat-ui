import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './button-plus-circle.less';

const ButtonPlusCircle = ({className, children}) => (
  <button className={classnames('btn-plus-circle', className)}>
    {children}
  </button>
);

ButtonPlusCircle.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}

export default ButtonPlusCircle;

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './button-mail.less';

const ButtonPlusCircle = ({className, children}) => (
  <button className={classnames('button-mail', className)}>
    {children}
  </button>
);

ButtonPlusCircle.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}

export default ButtonPlusCircle;

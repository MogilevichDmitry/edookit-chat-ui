import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import SVGInline from 'react-svg-inline';
import IconMail from '../../resources/icons/icon-mail.svg';
import './button-mail.less';

const ButtonPlusCircle = ({className}) => (
  <button className={classnames('button-mail', className)}>
    <SVGInline svg={IconMail} />
  </button>
);

ButtonPlusCircle.propTypes = {
  className: PropTypes.string
}

export default ButtonPlusCircle;

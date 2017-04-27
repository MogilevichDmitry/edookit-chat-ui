import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '../icon/icon.jsx';
import IconMail from '!raw-loader!../../resources/icons/icon-mail.svg';
import './button-mail.less';

const ButtonPlusCircle = ({className}) => (
  <button className={classnames('button-mail', className)}>
    <Icon svg={IconMail} />
  </button>
);

ButtonPlusCircle.propTypes = {
  className: PropTypes.string
}

export default ButtonPlusCircle;

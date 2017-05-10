import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '../icon/icon.jsx';
import IconPeople from '!raw-loader!../../resources/icons/icon-people.svg';
import './button-people.less';

const ButtonPeople = ({className}) => (
  <button className={classnames('btn-people', className)}>
    <Icon svg={IconPeople} />
  </button>
);

ButtonPeople.propTypes = {
  className: PropTypes.string
}

export default ButtonPeople;

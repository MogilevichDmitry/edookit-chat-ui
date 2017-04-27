import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '../icon/icon.jsx';
import IconSearch from '!raw-loader!../../resources/icons/icon-search.svg';
import './button-search.less';

const ButtonSearch = ({className}) => (
  <button className={classnames('btn-search', className)}>
    <Icon svg={IconSearch} />
  </button>
);

ButtonSearch.propTypes = {
  className: PropTypes.string
}

export default ButtonSearch;

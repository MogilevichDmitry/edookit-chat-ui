import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '../icon/icon.jsx';
import IconFile from '!raw-loader!../../resources/icons/icon-file.svg';
import './button-file.less';

const ButtonFile = ({className}) => (
  <button className={classnames('btn-file', className)}>
    <Icon svg={IconFile} />
  </button>
);

ButtonFile.propTypes = {
  className: PropTypes.string
}

export default ButtonFile;

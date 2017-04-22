import React from 'react';
import PropTypes from 'prop-types';
import './icon.less';

const Icon = (props) => {
  return(
    <span className={`${props.className} icon`}></span>
  );
}

Icon.propTypes = {
  className: PropTypes.string
};

export default Icon;

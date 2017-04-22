import React from 'react';
import PropTypes from 'prop-types';
import './alert-count.less';

const AlertCount = ({className, count}) => {

  return(
    <span className={`${className} alert-count`}>
      {count}
    </span>
  )
};

AlertCount.propTypes = {
  count: PropTypes.number,
  className: PropTypes.string
}

export default AlertCount;

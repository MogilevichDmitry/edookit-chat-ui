import React from 'react';
import PropTypes from 'prop-types';

const AsideItem = ({isHeader, title, headerButton, children}) => (
  <div className="aside__item">
    {isHeader ?
      <div className="aside__item-header">
        <div className="aside__item-title">
           {title}
        </div>
        {headerButton}
      </div> :
      <div className="aside__item-title">
         {title}
      </div>
    }
    {children}
  </div>
);

AsideItem.propTypes = {
  isHeader: PropTypes.bool,
  headerButton: PropTypes.node,
  title: PropTypes.string,
  children: PropTypes.node
}

AsideItem.defaultProps = {
  isHeader: true
}

export default AsideItem;

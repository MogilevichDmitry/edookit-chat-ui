import React from 'react';
import PropTypes from 'prop-types';

class AsideItem extends React.Component {
  render() {
    return(
      <div className="aside__item">
        <div className="aside__item-title">
           {this.props.title}
        </div>
        {this.props.children}
      </div>
    );
  }
}

AsideItem.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
}

export default AsideItem;

import React from 'react';

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
  title: React.PropTypes.string,
  children: React.PropTypes.node
}

export default AsideItem;

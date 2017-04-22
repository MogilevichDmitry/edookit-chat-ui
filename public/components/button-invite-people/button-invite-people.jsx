import React from 'react';
import PropTypes from 'prop-types';

import './button-invite-people.less';

class ButtonInvatePeople extends React.Component {
  render() {
    const {className} = this.props;

    return(
      <button className={`${className} button-invite-people`}>
        <span className="button-invite-people__icon speaker-icon"></span>
        <span className="button-invite-people__title">Invite people</span>
      </button>
    );
  }
}

ButtonInvatePeople.propTypes = {
  className: PropTypes.string
};

export default ButtonInvatePeople;

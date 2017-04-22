import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './logo-chat.less';

const LogoChat = ({className}) => (
  <div className={classnames('logo-chat', className)}>
    Edookit chat logotype
  </div>
)


export default LogoChat;

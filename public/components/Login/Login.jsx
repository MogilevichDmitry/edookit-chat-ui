import React from 'react';
import {Checkbox} from 'shared-components';
import LogoChat from '../logo-chat/logo-chat.jsx';
import LogoSpace from '../logo-space/logo-space.jsx';
import ButtonUserMenu from '../button-user-menu/button-user-menu.jsx';
import './Login.less';

export default class Login extends React.Component {
  render() {
    return (
      <div className="login">
        <div className="login__form">
          <div className="login__form-header">
            <LogoSpace className="login__form-header__logo"/>
            <ButtonUserMenu className="login__form-header__menu"/>
          </div>
          <div className="login__form-socials">
            SocialsButton
            SocialsButton
          </div>
          <div className="login__form-field">
            <input type="text" placeholder="E-mail" className="login__form-field__mail" />
            <input type="text" placeholder="Password" className="login__form-field__pass" />
            <div className="login__form-field__checkbox">
              <Checkbox label="Remember password"/>
              <a href="" className="login__form-field__title">Forgot password</a>
            </div>
          </div>
          <div className="login__form-btn">
            <button className="login__form-btn_login">Login</button>
          </div>
          <div className="login__form-registry">
            <a href="" className="login__form-registry_up">Sign up</a>
          </div>
        </div>
      </div>
    );
  }
}

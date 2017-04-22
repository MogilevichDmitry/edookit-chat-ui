import React from 'react';
import {SocialButton, Checkbox} from 'shared-components';
import LogoChat from '../logo-chat/logo-chat.jsx';
import LogoSpace from '../logo-space/logo-space.jsx';
import './Login.less';

export default class Login extends React.Component {
  render() {
    return (
      <div className="login">
        <div className="login__form">
          <div className="login__form-logos">
            <LogoChat />
            <LogoSpace />
          </div>
          <div className="login__form-field">
            <input type="text" placeholder="E-mail" className="login__form-field__mail" />
            <input type="text" placeholder="Password" className="login__form-field__pass" />
            <div className="login__form-field__checkbox">
              <Checkbox label="Remember password"/>
            </div>
          </div>
          <div className="login__form-btn">
            <button className="login__form-btn_login">Login</button>
            <a href="" className="login__form-btn_title">Forgot password</a>
          </div>
          <div className="login__form-registry">
            <a href="" className="login__form-registry_up">Sign up</a>
            <span className="login__form-registry_in">Sign in with:</span>
          </div>
          <div className="login__form-socials">
            <SocialButton type="facebook"/>
            <SocialButton type="google"/>
            <SocialButton type="microsoft"/>
          </div>
        </div>
      </div>
    );
  }
}

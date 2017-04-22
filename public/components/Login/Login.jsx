import React from 'react';
import './Login.less';

export default class Login extends React.Component {
  render() {
    return (
      <div className="login">
        <div className="login__form">
          <div className="login__form-logos">
            <span className="logo-chat"></span>
            <span className="logo-space"></span>
          </div>
          <div className="login__form-field">
            <input type="text" placeholder="E-mail" className="login__form-field__mail" />
            <input type="text" placeholder="Password" className="login__form-field__pass" />
            <div className="login__form-field__checkbox">
              <input type="checkbox" className="login__form-field__checkbox-box" />
              <span className="login__form-field__checkbox-title">Remember password</span>
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
            <span className="socials_fb"></span>
            <span className="socials_gg"></span>
            <span className="socials_ms"></span>
          </div>
        </div>
      </div>
    );
  }
}

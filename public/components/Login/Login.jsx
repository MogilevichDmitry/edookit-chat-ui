import React from 'react';
import '../App.less';

export default class Login extends React.Component {
  render() {
    return (
      <div className="login">
        <div className="login__form">
          <div className="login__form-logos">
            <span className="logo-chat"><img src="" alt="logo-chat"/></span>
            <span className="logo-space"><img src="" alt="logo-space"/></span>
          </div>
          <div className="login__form-field">
            <input type="text" className="login__form-field_mail" />
            <input type="text" className="login__form-field_pass" />
            <input type="checkbox" className="login__form-field_check" />Remember password
          </div>
          <div className="login__form-btn">
            <button classname="login__form-btn_login">Login</button>
            <a href="" classname="login__form-btn_title">Forgot password</a>
          </div>
          <div className="login__form-registry">
            <span className="registry__up"></span>
            <span className="registry__in"></span>
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

import React from 'react';
import ButtonPlusCircle from '../button-plus-circle/button-plus-circle.jsx';
import ButtonSend from '../button-send/button-send.jsx';
import './send-form.less';

const SendForm = () => (
  <form className="send-form">
    <label className="send-form__file-loader-label">
      <ButtonPlusCircle />
      <input className="send-form__file-loader-input" type="file"/>
    </label>
    <input className="send-form__message-input" type="text" placeholder="Write something cool..."/>
    <ButtonSend className="send-form__send-button" type="submit" />
  </form>
)

export default SendForm;

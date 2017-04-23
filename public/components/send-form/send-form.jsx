import React from 'react';
import ButtonPlusCircle from '../button-plus-circle/button-plus-circle.jsx';

const SendForm = () => (
  <form className="send-form">
    <input className="send-form__file-loader-input" type="file" id="send-form__file-loader"/>
    <label className="send-form__file-loader-label" htmlFor="send-form__file-load">
      <ButtonPlusCircle>Load files</ButtonPlusCircle>
    </label>
    <input className="send-form__message-input" type="text" placeholder="Write something cool..."/>
    <input className="send-form__send-button " type="submit"/>
  </form>
)

export default SendForm;

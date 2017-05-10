import React from 'react';
import Icon from '../icon/icon.jsx';
import ButtonInfo from '../button-info/button-info.jsx';
import ButtonPeople from '..//button-people/button-people.jsx';
import ButtonFile from '..//button-file/button-file.jsx';
import ButtonSettings  from '..//button-settings/button-settings.jsx';

const ConversationFooter = () => (
  <div className="conversation__footer">
    <ButtonInfo />
    <ButtonPeople />
    <ButtonFile />
    <ButtonSettings />
  </div>
)

export default ConversationFooter;

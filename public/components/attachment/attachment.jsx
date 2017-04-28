import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon/icon.jsx';
import IconSpeaker from '!raw-loader!../../resources/icons/icon-speaker.svg';
import './attachment.less';

const Attachment = ({className, data}) => {
  const attachmentClassName = `attachment attachment_${data.format} ${className}`;

  return (
    <div className={attachmentClassName}>
      <Icon className="attachment__icon" svg={IconSpeaker}/>
      <span className="attachment__title">
        {`${data.name}.${data.format}`}
      </span>
    </div>
  )
}

Attachment.propTypes = {
  className: PropTypes.string,
  data: PropTypes.shape({
    format: PropTypes.string,
    name: PropTypes.string
  })
}

export default Attachment;

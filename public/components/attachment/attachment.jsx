import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon/icon.jsx';
import IconDownload from '!raw-loader!../../resources/icons/icon-download.svg';
import IconPDF from '!raw-loader!../../resources/icons/icon-pdf.svg';
import IconJPG from '!raw-loader!../../resources/icons/icon-jpg.svg';
import './attachment.less';

const PDF = 'PDF';
const JPG = 'JPG';

const Attachment = ({className, data}) => {
  return (
    <a href="#" className={`attachment attachment_${data.format} ${className}`}>
      {renderIcon(data.format)}
      <span className="attachment__title">
        <span className="attachment__title-name">{data.name}</span>
        <span className="attachment__title-format">{`.${data.format}`}</span>
      </span>
      <Icon className="attachment__icon-download" svg={IconDownload} />
    </a>
  )
}

const renderIcon = (format) => {
  switch(format.toUpperCase()) {
    case PDF:
      return <Icon className="attachment__icon" svg={IconPDF}/>;
      break;
    case JPG:
      return <Icon className="attachment__icon" svg={IconJPG}/>;
      break;
    default:
      return <Icon className="attachment__icon" svg={IconPDF}/>;
      break;
  }
}

Attachment.propTypes = {
  className: PropTypes.string,
  data: PropTypes.shape({
    format: PropTypes.string,
    name: PropTypes.string
  })
}

export default Attachment;

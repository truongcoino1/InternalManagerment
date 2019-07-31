import React, { Component, Fragment } from 'react';
import { Button, Icon } from 'antd';
import './modal-header.scss';

export class ModalHeader extends Component {
  render() {
    const {
      title,
      renderHeader,
      right,
      onClose,
    } = this.props;
    return (
      <div className="header">
        {renderHeader ? (
          <Fragment>
            <div className="item">{renderHeader.title}</div>
            <div className="item" onClick={onClose}>{renderHeader.right}<Button className="close-btn"><Icon type="close" /></Button></div>
          </Fragment>
        ) : (
          <Fragment>
            <div className="title">{title}</div>
            <div className="right" onClick={onClose}>{right}<Button className="close-btn" shape="circle"><Icon type="close" /></Button></div>
          </Fragment>
        )}
      </div>
    );
  }
}

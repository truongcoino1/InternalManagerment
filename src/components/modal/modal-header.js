import React, { Component, Fragment } from 'react';
import { Button } from 'antd';
import './modal-header.scss';

export class ModalHeader extends Component {
  render() {
    const {
      title,
      renderHeader,
    } = this.props;
    return (
      <div className="header">
        {renderHeader ? (
          <Fragment>
            <div className="item">{renderHeader.title}</div>
          </Fragment>
        ) : (
          <Fragment>
            <div className="title">{title}</div>
          </Fragment>
        )}
      </div>
    );
  }
}

import React, { Component, Fragment } from 'react';
import { Button } from 'antd';
import './modal-footer.scss';

export class ModalFooter extends Component {
  render() {
    const {
      onClose,
      onConfirm,
      renderFooter,
      right,
      confirmText,
      noComfirm,
      noClose,
      cancelText,
    } = this.props;
    return (
      <div className="footer">
        {renderFooter ? (
          <Fragment>
            <div className="item">{renderFooter.left}</div>
            <div className="item">{renderFooter.right}</div>
          </Fragment>
        ) : (
          <Fragment>
            {noClose ? (
              <div style={{ width: '70px' }} />
            ) : (
              <Button className="button cancel-btn" onClick={onClose}>
                {cancelText || 'Close'}
              </Button>
            )}
            <div>
              {right ||
                (!noComfirm && (
                  <Button className="button primary-btn" onClick={onConfirm}>
                    {confirmText || 'Confirm'}
                  </Button>
                ))}
            </div>
          </Fragment>
        )}
      </div>
    );
  }
}

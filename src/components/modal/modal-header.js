import React, { Component, Fragment } from 'react';
import { Button } from 'antd';
import styles from './modal-header.scss';

export class ModalHeader extends Component {
  render() {
    const {
      onClose,
      onConfirm,
      title,
      renderHeader,
      right,
      confirmText,
      noComfirm,
      noClose,
      cancelText,
      display
    } = this.props;
    return (
      <div style={{ display }} className={styles.header}>
        {renderHeader ? (
          <Fragment>
            <div className={styles.item}>{renderHeader.left}</div>
            <div className={styles.item}>{renderHeader.title}</div>
            <div className={styles.item}>{renderHeader.right}</div>
          </Fragment>
        ) : (
          <Fragment>
            {noClose ? (
              <div style={{ width: '70px' }} />
            ) : (
              <Button className={styles.button} onClick={onClose}>
                {cancelText || 'Close'}
              </Button>
            )}
            <div className={styles.title}>{title}</div>
            <div>
              {right ||
                (!noComfirm && (
                  <Button className={styles.button} onClick={onConfirm}>
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

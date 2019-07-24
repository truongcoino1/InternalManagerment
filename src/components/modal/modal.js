import React from 'react';
import { Modal as VendorModal } from 'antd';
import { ModalHeader } from './modal-header';
import styles from './modal.scss';

export class Modal {
  static show({
    content,
    onClose,
    onConfirm,
    noHeader = false,
    renderHeader,
    title,
    right,
    confirmText,
    cancelText,
    width
  }) {
    VendorModal.info({
      content: (
        <div
          style={{ width: '100%', minHeight: '400px' }}
          className={styles.modalContent}
        >
          {!noHeader && (
            <ModalHeader
              onClose={onClose}
              onConfirm={onConfirm}
              renderHeader={renderHeader}
              title={title}
              confirmText={confirmText}
              cancelText={cancelText}
              right={right}
            />
          )}
          <div className={styles.content}>{content}</div>
        </div>
      ),
      // width,
      maxHeight: '70%',
      className: styles.customContainerModal,
      style: { minWidth: width || 416 },
      centered: true
    });
  }

  static dismiss() {
    VendorModal.destroyAll();
  }
}

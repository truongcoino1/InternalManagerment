import React from 'react';
import { Modal as VendorModal } from 'antd';
import { ModalHeader } from './modal-header';
import {ModalFooter } from './modal-footer';
import './modal.scss';

export class Modal {
  static show({
    content,
    onClose,
    onConfirm,
    noHeader = false,
    renderHeader,
    renderFooter,
    title,
    right,
    confirmText,
    cancelText,
    width,
  }) {
    VendorModal.info({
      content: (
        <div
          style={{ width: '100%' }}
          className={'modalContent'}
        >
          {!noHeader && (
            <ModalHeader
              renderHeader={renderHeader}
              title={title}
            />
          )}
          <div className="content">{content}</div>
          {!renderFooter && (
            <ModalFooter
              onClose={onClose}
              onConfirm={onConfirm}
              renderFooter={renderFooter}
              title={title}
              confirmText={confirmText}
              cancelText={cancelText}
              right={right}
            />
          )}
        </div>
      ),
      // width,
      maxHeight: '70%',
      className:"customContainerModal",
      style: { minWidth: width || 416 },
      centered: true
    });
  }

  static dismiss() {
    VendorModal.destroyAll();
  }
}

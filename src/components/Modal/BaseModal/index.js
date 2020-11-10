import React from 'react';
import Modal from 'react-modal';
import {
  clearAllBodyScrollLocks,
  disableBodyScroll,
  enableBodyScroll,
} from 'body-scroll-lock';
import Draggable from 'react-draggable';

import { Container } from './BaseModal.styles';

Modal.setAppElement('body');

export const BaseModal = ({
  isOpen = false,
  onClose = () => {},
  onAfterOpen = () => {},
  allowKeyExit = true,
  children,
  isDraggable = false,
  isDragBounded = true,
  dragOnStart = () => {},
  dragOnStop = () => {},
  dragOnDrag = () => {},
  bodyScrollLockTarget = '',
}) => {
  const dragBounds = isDraggable && isDragBounded ? '.dc-modal-overlay' : '';
  const dragCancelTarget = 'input, textarea, .not-draggable';
  return (
    <Modal
      overlayClassName={{
        base: 'dc-modal-overlay',
        afterOpen: isDraggable ? '' : 'dc-modal-overlay--open',
        beforeClose: 'dc-modal-overlay--close',
      }}
      className="dc-modal"
      isOpen={isOpen}
      onRequestClose={() => {
        if (bodyScrollLockTarget)
          enableBodyScroll(document.querySelector(bodyScrollLockTarget));
        onClose();
      }}
      onAfterOpen={() => {
        onAfterOpen();
        if (isDraggable) return;
        if (bodyScrollLockTarget)
          disableBodyScroll(document.querySelector(bodyScrollLockTarget));
      }}
      onAfterClose={() => {
        const modalNodes = document.querySelector('.dc-modal-overlay--open');
        if (modalNodes === null) {
          if (document.querySelector('body').getAttribute('style')) {
            clearAllBodyScrollLocks();
          }
        }
      }}
      shouldCloseOnOverlayClick={false}
      /**
       * Reference: http://reactcommunity.org/react-modal/#usage
       * `esc` key press시 onClose가 호출됨
       * onCloseAction과 onOk 대응이 필요한 경우가 있어 해당 옵션은 사용하지 않는 것으로 수정
       * modal의 경우 해당 액션이 필요하여 분기처리
       */
      shouldCloseOnEsc={allowKeyExit}
    >
      {isDraggable && (
        <Draggable
          bounds={dragBounds}
          cancel={dragCancelTarget}
          onStart={dragOnStart}
          onStop={dragOnStop}
          onDrag={dragOnDrag}
        >
          <Container isDraggable={isDraggable}>{children}</Container>
        </Draggable>
      )}
      {!isDraggable && <Container>{children}</Container>}
    </Modal>
  );
};

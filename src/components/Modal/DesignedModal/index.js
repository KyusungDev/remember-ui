import React, { useState, useEffect, useCallback } from 'react';
import { enableBodyScroll } from 'body-scroll-lock';

import {
  Container,
  Modal,
  Block,
  Title,
  SubTitle,
  Buttons,
  Button,
} from './DesignedModal.styles';

export const DesignedModal = ({
  isOpen,
  onClose,
  title,
  subTitle,
  children,
  customText,
  submit,
  close,
  submitText,
  closeText = '닫기',
  submitButtonDisabled = false,
  headerButton,
  isLoading = false,
  isDraggable = false,
  isDragBounded = true,
  onAfterOpen = () => {},
  className,
  dragOnStart = () => {},
  dragOnStop = () => {},
  dragOnDrag = () => {},
  mobileWidth = '90vw',
  mobileHeight,
  bodyScrollLockTargetId,
}) => {
  const [modalId, setModalId] = useState(null);
  const [bodyScrollLockTarget, setBodyScrollLockTarget] = useState(null);

  useEffect(() => {
    const id = Math.floor(Math.random() * 1000);
    setModalId(id);
    const target = bodyScrollLockTargetId
      ? `#${bodyScrollLockTargetId}`
      : `#designedModal${id}`;

    setBodyScrollLockTarget(target);
  }, [bodyScrollLockTargetId]);

  const enableBodyScrollLock = useCallback(() => {
    if (bodyScrollLockTarget)
      enableBodyScroll(document.querySelector(bodyScrollLockTarget));
  }, [bodyScrollLockTarget]);

  return (
    <Container
      className={className}
      isOpen={isOpen}
      onClose={onClose}
      onAfterOpen={onAfterOpen}
      isDraggable={isDraggable}
      isDragBounded={isDragBounded}
      dragOnStart={dragOnStart}
      dragOnStop={dragOnStop}
      dragOnDrag={dragOnDrag}
      bodyScrollLockTarget={bodyScrollLockTarget}
    >
      <Modal
        isDraggable={isDraggable}
        mobileWidth={mobileWidth}
        mobileHeight={mobileHeight}
      >
        <Modal.Header>
          <Modal.Header.Content>
            <Title>{title}</Title>
            {subTitle && <SubTitle>{subTitle}</SubTitle>}
          </Modal.Header.Content>
          <Modal.Header.Content>{headerButton}</Modal.Header.Content>
        </Modal.Header>
        <Modal.Body id={modalId && `designedModal${modalId}`}>
          {children}
        </Modal.Body>
        <Modal.Footer>
          {customText}
          <Block />
          <Buttons>
            {close && (
              <Button
                className="not-draggable"
                color="gray"
                size="large"
                fill
                rounded
                onClick={() => {
                  enableBodyScrollLock();
                  close();
                }}
                disabled={isLoading}
              >
                {closeText}
              </Button>
            )}
            {submit && (
              <Button
                className="not-draggable"
                color="yellow"
                size="large"
                fill
                rounded
                onClick={() => {
                  enableBodyScrollLock();
                  submit();
                }}
                disabled={submitButtonDisabled}
                isLoading={isLoading}
              >
                {submitText}
              </Button>
            )}
          </Buttons>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

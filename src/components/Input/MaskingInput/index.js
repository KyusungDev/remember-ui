import React, { useState } from 'react';

import { requiredIcon } from '../../../assets';

import {
  Container,
  Label,
  Mark,
  ErrorMessage,
  Input,
} from './MaskingInput.styles';

export const MaskingInput = ({
  value,
  name,
  onChange,
  onClick,
  placeholder,
  label,
  autoFocus,
  required,
  disabled,
  className,
  onEnter,
  // error만 있어도 되지만 다른 DcNewInput을 사용한 곳에 margin 대응을 위해 넣음
  useError,
  errorMark,
  footer,
  validate,
  type = 'text',
  mask = false,
  blankLabel = false,
  marginBottom,
}) => {
  const [error, setError] = useState('');
  const _validate = () => {
    setError(validate(value));
  };

  return (
    <Container className={className}>
      {(label || blankLabel) && (
        <Label marginBottom={marginBottom}>
          <span>{label}</span>
          {required && <Mark src={requiredIcon} alt="mark" />}
        </Label>
      )}

      <Input
        guide={false}
        mask={mask}
        error={!!error || errorMark}
        value={value}
        type={type}
        name={name}
        onChange={onChange}
        onClick={onClick}
        placeholder={placeholder}
        autoFocus={autoFocus}
        readOnly={disabled}
        onBlur={validate && _validate}
        onKeyPress={({ key }) => {
          if (key === 'Enter') {
            onEnter && onEnter();
          }
        }}
      />

      {footer}
      {useError && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
};

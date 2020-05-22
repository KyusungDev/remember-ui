import React, { useRef } from 'react';

import useCustomSetInput from '../../../hooks/useCustomSetInput'

import { Container, Label, Text, TextCount } from './Textarea.styles';

export const Textarea = ({
  value,
  type,
  name,
  onChange,
  placeholder,
  label,
  required,
  first,
  className,
  maxLength,
  blankLabel = false,
  countLength = false,
}) => {
  const textareaRef = useRef(null);
  const _onChange = useCustomSetInput(textareaRef, value, onChange, maxLength);

  return (
    <Container>
      {(label || blankLabel) && (
        <Label>
          <Label.Title>{label}</Label.Title>
          {required && <Label.Icon />}
          {first && <Label.Notice>* 필수항목</Label.Notice>}
        </Label>
      )}
      <Text
        ref={textareaRef}
        className={className}
        value={value}
        type={type}
        name={name}
        onChange={_onChange}
        maxLength={maxLength}
        placeholder={placeholder}
      />
      {countLength && (
        <TextCount>
          <TextCount.Progress inProgress={value.length > 0}>
            {(value && value.length) || 0}
          </TextCount.Progress>
          <TextCount.Max>/{maxLength}자</TextCount.Max>
        </TextCount>
      )}
    </Container>
  );
};

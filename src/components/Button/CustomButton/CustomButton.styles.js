import styled, { css } from 'styled-components';
import { white, gray100, gray120, flexCenter } from '../../../core/GlobalStyle';

export const Inner = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1px;
`;

export const Container = styled.div`
  ${flexCenter};

  box-sizing: border-box;
  cursor: ${({ isLoading, disabled }) =>
    isLoading || disabled ? 'default' : 'pointer'};

  height: ${({ size }) =>
    (size === 'small' && '32px') ||
    (size === 'medium' && '36px') ||
    (size === 'large' && '40px') ||
    (size === 'xlarge' && '48px')};

  font-size: ${({ size }) =>
    (size === 'small' && '13px') ||
    (size === 'medium' && '13px') ||
    (size === 'large' && '14px') ||
    (size === 'xlarge' && '15px')};

  min-width: ${({ size }) =>
    (size === 'small' && '68px') ||
    (size === 'medium' && '78px') ||
    (size === 'large' && '108px') ||
    (size === 'xlarge' && '116px')};

  padding: ${({ size }) =>
    (size === 'small' && '0 16px') ||
    (size === 'medium' && '0 20px') ||
    (size === 'large' && '0 20px') ||
    (size === 'xlarge' && '0 24px')};

  font-weight: ${({ customStyle }) => customStyle.fontWeight};
  border-radius: ${({ size }) => (size === 'small' ? '2px' : '4px')};

  border: 1px solid ${({ customStyle }) => customStyle.borderColor};
  background-color: ${({ customStyle }) => customStyle.backgroundColor};
  color: ${({ customStyle }) => customStyle.fontColor};

  ${({ block }) =>
    block &&
    css`
      width: 100%;
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      color: ${white};
      border: 1px solid ${gray120};
      background-color: ${gray120};
    `};

  ${({ disabled, outline }) =>
    disabled &&
    outline &&
    css`
      border-color: ${gray100};
      color: ${gray120};
      background-color: ${white};
    `}
`;

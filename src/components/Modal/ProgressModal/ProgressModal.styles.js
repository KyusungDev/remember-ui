import styled from 'styled-components';

import {
  gray200,
  text,
  yellow100,
  flexCenterY,
  textExtraLarge,
  textMedium,
  textBreak,
  textSmall,
  textBreakPre,
} from '../../../core/GlobalStyle';

export const Container = styled.div`
  width: 400px;
  max-width: 400px;
  border-radius: 10px;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
  background-color: white;
`;

export const Body = styled.div`
  ${flexCenterY}
  flex-direction: column;
  padding: 48px 30px;
  box-sizing: border-box;
`;

export const Icon = styled.img`
  width: 44px;
  height: 44px;
  margin-bottom: 12px;
`;

export const TitleText = styled.div`
  ${({ hasIcon }) =>
    hasIcon
      ? textExtraLarge({ weight: 'bold', color: text })
      : textMedium({ weight: 'bold', color: text })};
  ${textBreak};

  width: 100%;
  text-align: center;
`;

export const MessageText = styled.div`
  ${textSmall({ color: gray200 })}
  ${textBreakPre}

  width: 100%;
  margin-top: 8px;
  text-align: center;
`;

export const ProgressBar = styled.div`
  position: relative;
  height: 8px;
  width: 100%;
`;

ProgressBar.Filler = styled.div`
  width: ${({ percentage }) => `${percentage}%`};
  background-color: ${yellow100};
  height: 100%;
  transition: width 0.2s ease-in;
  border-bottom-left-radius: 10px;
`;

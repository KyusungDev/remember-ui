import React from 'react';
import t from 'prop-types';
import {
  ProgressModal as Component,
  GlobalTheme,
} from '../../../../../dist/index.esm';

export const ProgressModal = ({ children, ...rest }) => {
  return (
    <>
      <GlobalTheme />
      <Component {...rest}>{children}</Component>
    </>
  );
};

ProgressModal.propTypes = {
  icon: t.string,
  title: t.func || t.string,
  currentCount: t.number,
  totalCount: t.number,
  message: t.string,
  isOpen: t.oneOf([false, true]),
};

ProgressModal.defaultProps = {
  currentCount: 0,
  totalCount: 1,
};

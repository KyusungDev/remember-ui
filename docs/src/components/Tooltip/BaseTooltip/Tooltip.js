import React from 'react';
import t from 'prop-types';
import { Tooltip as Component } from '../../../../../dist/index.esm';

export const Tooltip = ({ ...rest }) => {
  return <Component {...rest} />;
};

Tooltip.propTypes = {
  customComponent: t.object,
  offset: t.string,
  arrow: t.oneOf([false, true]),
  onClick: t.func,
  iconStyle: t.object,

  size: t.oneOf(['small', 'medium']),
  type: t.oneOf(['help', 'plus']),
  theme: t.oneOf(['dclight', 'dcdark', 'dcblue']),
  placement: t.oneOf(['bottom', 'top', 'right', 'left']),
  textAlign: t.oneOf(['center', 'left', 'right']),
};

Tooltip.defaultProps = {
  offset: '0,0',
  arrow: true,
  onClick: () => {},
  size: 'small',
  type: 'help',
  theme: 'dclight',
  placement: 'bottom',
  textAlign: 'center',
};

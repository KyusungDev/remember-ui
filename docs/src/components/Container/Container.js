import React from 'react';
import t from 'prop-types';
import { Container as Component } from '../../../../dist/index.esm';

export const Container = ({ children, ...rest }) => (
  <Component {...rest}>{children}</Component>
);

Container.propTypes = {
  direction: t.oneOf(['row', 'row-reverse', 'column', 'column-reverse']),
};

Container.defaultProps = {
  direction: 'row',
};

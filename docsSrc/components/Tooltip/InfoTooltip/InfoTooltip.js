import React from 'react';
import t from 'prop-types';
import { InfoTooltip as Component, GlobalTheme } from 'remember-ui';

export const InfoTooltip = ({ ...rest }) => {
  return (
    <>
      <GlobalTheme />
      <Component {...rest} />
    </>
  );
};

InfoTooltip.propTypes = {
  target: t.string,
  content: t.object,
  defaultDisabled: t.oneOf([false, true]),
};

InfoTooltip.defaultProps = {};

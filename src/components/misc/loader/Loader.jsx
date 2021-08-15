import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress } from '@material-ui/core';

export default function Loader(props) {
  const { align, value, fullscreen } = props;

  return (
    <div className={`loader text-${align} py-2 ${fullscreen && 'fullscreen'}`}>
      <CircularProgress variant={value ? 'determinate' : 'indeterminate'} value={value} />
    </div>
  );
}

Loader.defaultProps = {
  align: 'center',
  value: 0,
  fullscreen: false
};

Loader.propTypes = {
  align: PropTypes.oneOf(['left', 'center', 'right']),
  value: PropTypes.number,
  fullscreen: PropTypes.bool
};

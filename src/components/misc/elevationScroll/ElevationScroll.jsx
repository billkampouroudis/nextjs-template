import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

export default function ElevationScroll(props) {
  const {
    children, window, style, onUpdate
  } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined
  });

  useEffect(() => {
    onUpdate(trigger);
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    ...style
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
  style: PropTypes.object,
  onUpdate: PropTypes.func
};

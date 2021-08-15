/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import React from 'react';
import PropTypes from 'prop-types';
import NextLink from 'next/link';
import MuiLink from '@material-ui/core/Link';

/**
 * This is a wrapper for the Link component of Next.js that implements the styling of the Material UI library.
 * @param {object} props
 * @returns
 */
export default function NavItem(props) {
  const {
    children, href, onClick, className
  } = props;

  const handleOnClick = (event) => {
    event.preventDefault();
    return onClick ? onClick(event) : undefined;
  };

  return (
    href ? (
      <NextLink href={href} passHref>
        <MuiLink className={className}>
          {children}
        </MuiLink>
      </NextLink>
    ) : (
      <NextLink href="" passHref>
        <MuiLink
          onClick={handleOnClick}
          onKeyPress={handleOnClick}
          className={className}
        >
          {children}
        </MuiLink>
      </NextLink>
    )
  );
}

NavItem.defaultProps = {
  href: '',
  onClick: undefined,
  className: ''
};

NavItem.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string
};

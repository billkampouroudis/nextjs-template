import React from 'react';
import PropTypes from 'prop-types';
import {
  Drawer, Container, IconButton, List, ListItem, ListItemText
} from '@material-ui/core';
import { Close, Home, ContactSupport } from '@material-ui/icons';
import pages from '../pages';

// Custom Components
import NavItem from '../../misc/navItem/NavItem';

const listItemClasses = 'd-flex align-items-center py-2 px-3';

export default function MobileMenu({ open, onClose, anchor }) {
  return (
    <Drawer anchor={anchor} open={open} onClose={onClose}>
      <Container className="mt-2 text-center">
        <IconButton size="small" className="d-sm-none">
          <Close style={{ fontSize: '32px' }} color="primary" onClick={onClose} />
        </IconButton>
      </Container>

      <List>
        <ListItem button className="p-0">
          <ListItemText
            primary={(
              <NavItem href={pages.home.url} className={listItemClasses}>
                <Home color="primary" className="mr-2" />
                {pages.home.title}
              </NavItem>
          )}
          />
        </ListItem>

        <ListItem button className="p-0">
          <ListItemText
            primary={(
              <NavItem href={pages.contact.url} className={listItemClasses}>
                <ContactSupport color="primary" className="mr-2" />
                {pages.contact.title}
              </NavItem>
          )}
          />
        </ListItem>
      </List>

      {/* <NavItem href={pages.home.url}>
        {pages.home.title}
      </NavItem> */}
    </Drawer>
  );
}

MobileMenu.defaultProps = {
  anchor: 'right'
};

MobileMenu.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  anchor: PropTypes.oneOf(['left', 'right', 'top', 'bottom'])
};

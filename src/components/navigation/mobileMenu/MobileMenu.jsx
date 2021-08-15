import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Drawer, Container, IconButton, List, ListItem, ListItemText, Collapse
} from '@material-ui/core';
import {
  Close, Home, ContactSupport, ExpandLess, ExpandMore
} from '@material-ui/icons';
import pages from '../pages';
import scss from '../../../styles/_variables.module.scss';

// Custom Components
import NavItem from '../../misc/navItem/NavItem';

const listItemClasses = 'd-flex align-items-center py-2 px-3';

export default function MobileMenu({ open, onClose, anchor }) {
  const [sectionsOpen, setSectionsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= parseInt(scss.breakpointSm.replace('px', ''), 10)) {
        onClose();
      }
    };

    window.addEventListener('resize', handleResize);

    return function cleanup() {
      window.removeEventListener('resize', handleResize);
    };
  }, [onClose]);

  return (
    <Drawer anchor={anchor} open={open} onClose={onClose}>
      {/* Close Icon */}
      <Container className="mt-2 text-center">
        <IconButton size="small" className="d-sm-none" onClick={onClose}>
          <Close style={{ fontSize: '32px' }} color="primary" />
        </IconButton>
      </Container>

      <List className="w-100" style={{ minWidth: '280px' }}>
        {/* Home */}
        <ListItem button className="p-0" key={pages.home.title}>
          <ListItemText
            primary={(
              <NavItem href={pages.home.url} className={listItemClasses}>
                <Home color="primary" className="mr-2" />
                {pages.home.title}
              </NavItem>
          )}
          />
        </ListItem>

        {/* Contact */}
        <ListItem button className="p-0" key={pages.contact.title}>
          <ListItemText
            primary={(
              <NavItem href={pages.contact.url} className={listItemClasses}>
                <ContactSupport color="primary" className="mr-2" />
                {pages.contact.title}
              </NavItem>
          )}
          />
        </ListItem>

        {/* Sections */}
        <ListItem
          button
          className="p-0"
          onClick={() => setSectionsOpen(!sectionsOpen)}
          key={pages.sections.title}
        >
          <ListItemText
            primary={(
              <NavItem className={listItemClasses}>
                <ContactSupport color="primary" className="mr-2" />
                <span className="mr-2">{pages.sections.title}</span>
                {sectionsOpen ? <ExpandLess /> : <ExpandMore />}
              </NavItem>
            )}
          />
        </ListItem>
        <Collapse in={sectionsOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {/* Testimonials */}
            <ListItem button className="py-0" key={pages.sections.children.testimonials.title}>
              <ListItemText
                primary={(
                  <NavItem href={pages.sections.children.testimonials.url} className={listItemClasses}>
                    <ContactSupport color="primary" className="mr-2" />
                    <span>{pages.sections.children.testimonials.title}</span>
                  </NavItem>
                )}
              />
            </ListItem>

            {/* Plans */}
            <ListItem button className="py-0" key={pages.sections.children.plans.title}>
              <ListItemText
                primary={(
                  <NavItem href={pages.sections.children.plans.url} className={listItemClasses}>
                    <ContactSupport color="primary" className="mr-2" />
                    <span>{pages.sections.children.plans.title}</span>
                  </NavItem>
                )}
              />
            </ListItem>
          </List>
        </Collapse>
      </List>
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

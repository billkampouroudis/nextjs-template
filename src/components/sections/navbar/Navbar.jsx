import React, { useState } from 'react';
import {
  AppBar, Toolbar, Typography, Menu, MenuItem
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ArrowDropDown, AllInclusiveOutlined } from '@material-ui/icons';
import pages from './pages';

// Custom Components
import ElevationScroll from '../../misc/elevationScroll/ElevationScroll';
import NavItem from '../../misc/navItem/NavItem';

const useStyles = makeStyles((theme) => ({
  root: {
    // Add margin between the menu items
    '& > * + *': {
      marginLeft: theme.spacing(2)
    }
  },
  // Solve the overlapping caused by the navbar
  offset: theme.mixins.toolbar
}));

export default function Navbar() {
  const [trigger, setTrigger] = useState(false);
  const [sectionLink, setSectionLink] = useState(null);
  const classes = useStyles();

  const handleSectionClick = (event) => {
    setSectionLink(event.currentTarget);
  };

  const handleSectionClose = () => {
    setSectionLink(null);
  };

  return (
    <>
      <ElevationScroll
        onUpdate={(value) => setTrigger(value)}
        style={{
          color: trigger ? 'primary' : 'transparent'
        }}
      >
        <AppBar position="fixed">
          <Toolbar className="display-flex justify-content-between">
            <NavItem href={pages.home.url} className="mr-2">
              <AllInclusiveOutlined style={{ fontSize: '48px' }} />
            </NavItem>

            <nav>
              <Typography className={classes.root}>
                <NavItem href={pages.home.url} className="mr-2">
                  {pages.home.title}
                </NavItem>

                <NavItem href={pages.contact.url} className="mr-2">
                  {pages.contact.title}
                </NavItem>

                <NavItem onClick={handleSectionClick} className="d-inline-flex align-items-center">
                  {pages.sections.title}
                  <ArrowDropDown />
                </NavItem>
                <Menu
                  id="simple-menu"
                  anchorEl={sectionLink}
                  keepMounted
                  open={Boolean(sectionLink)}
                  onClose={handleSectionClose}
                >
                  <MenuItem onClick={handleSectionClose}>Profile</MenuItem>
                  <MenuItem onClick={handleSectionClose}>My account</MenuItem>
                  <MenuItem onClick={handleSectionClose}>Logout</MenuItem>
                </Menu>

              </Typography>
            </nav>

          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.offset} />
    </>
  );
}

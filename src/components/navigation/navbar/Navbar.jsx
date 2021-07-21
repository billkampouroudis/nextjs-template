import React, { useState } from 'react';
import {
  AppBar, Toolbar, Typography, Menu, MenuItem, Link
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ArrowDropDown, AllInclusiveOutlined } from '@material-ui/icons';
import pages from './pages';
import scss from '../../../styles/_variables.module.scss';

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

  const handleSectionsClick = (event) => {
    setSectionLink(event.currentTarget);
  };
  const handleSectionsClose = () => {
    setSectionLink(null);
  };

  const getSubPages = (page) => {
    const children = page.children || {};
    const results = [];

    for (const key in children) {
      const child = children[key];

      results.push((
        <MenuItem className="nav-menu-item">
          <Link href={child.url} className="w-100 px-3 py-2">
            {child.title}
          </Link>
        </MenuItem>
      ));
    }

    return results;
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
            <NavItem href={pages.home.url}>
              <AllInclusiveOutlined style={{ fontSize: '48px', color: trigger ? '#fff' : scss.primaryMain }} />
            </NavItem>

            <nav>
              <Typography className={classes.root}>
                <NavItem href={pages.home.url} className={trigger && 'text-white'}>
                  {pages.home.title}
                </NavItem>

                <NavItem href={pages.contact.url} className={trigger && 'text-white'}>
                  {pages.contact.title}
                </NavItem>

                <NavItem
                  onClick={handleSectionsClick}
                  className={`d-inline-flex align-items-center ${trigger && 'text-white'}`}
                >
                  {pages.sections.title}
                  <ArrowDropDown />
                </NavItem>
                <Menu
                  anchorEl={sectionLink}
                  keepMounted
                  open={Boolean(sectionLink)}
                  onClose={handleSectionsClose}
                >
                  {getSubPages(pages.sections)}
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

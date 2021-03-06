import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import companyIcon from './../icons/company.svg';
import { withStyles, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import Sidebar from './sidebar';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  accountIcon: {
    fontSize: 24,
    [theme.breakpoints.up('sm')]: {
      fontSize: 38
    }
  },
  companyIconWrapper: {
    display: 'none',
    flexGrow: '1',
    justifyContent: 'flex-start',
    [theme.breakpoints.up('sm')]: {
      display: 'flex'
    }
  },
  accountWrapper: {
    marginLeft: 'auto'
  },
  location: {
    display: 'flex',
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  gap: {
    backgroundColor: '#002984',
    display: 'block',
    height: 24,
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  }
});

export class CustomAppBar extends Component {
  state = {
    anchorEl: null,
    isSidebarOpened: false
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  toggleSidebar = open => () => {
    this.setState({ isSidebarOpened: open });
  }

  render() {
    const { classes, location } = this.props;
    const { anchorEl, isSidebarOpened } = this.state;
    const open = Boolean(anchorEl);
    return (
      <div>
        <AppBar position="static">
          <div className={classes.gap}>
          </div>
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={this.toggleSidebar(true)}>
              <MenuIcon />
            </IconButton>
            <div className={classes.companyIconWrapper}>
              <img alt='Company logo' src={companyIcon} />
            </div>
            <div className={classes.location}>
              <Typography variant='title' color='inherit'>
                {location}
              </Typography> 
            </div>
            <div className={classes.accountWrapper}>
              <IconButton
                aria-owns={open ? 'menu-appbar' : null}
                aria-haspopup="true"
                onClick={this.handleMenu}
                color="inherit"
              >
                <AccountCircle className={classes.accountIcon}/>
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={this.handleClose}
              >
                <MenuItem onClick={this.handleClose}>React is great</MenuItem>
                <MenuItem onClick={this.handleClose}>You are great too</MenuItem>
              </Menu>
            </div>
          </Toolbar>
          <Sidebar open={isSidebarOpened} onClose={this.toggleSidebar(false)}/>
        </AppBar>
      </div>
    )
  }
}

CustomAppBar.propTypes = {
  location: PropTypes.string.isRequired
}

export default withStyles(styles)(CustomAppBar);
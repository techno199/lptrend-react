import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import { ListItem, ListItemText, IconButton, Typography, Grid } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import payments from './../icons/payments.svg';
import settings from './../icons/settings.svg';
import sites from './../icons/sites.svg';
import templates from './../icons/templates.svg';

const styles = theme => ({
  list: {
    width: 304,
    color: theme.palette.common.white
  },
  profile: {

  },
  accountIcon: {
    fontSize: 64
  },
  name: {
    fontWeight: theme.typography.fontWeightMeduim,
    fontSize: theme.typography.fontSize,
    lineHeight: '14px'
  },
  email: {
    fontSize: theme.typography.fontSize,
    lineHeight: '20px'
  },
  accountButton: {
    width: 64,
    height: 64
  },
  profileWrapper: {
    height: 172,
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'flex-end',
    padding: 10
  }
});

class Sidebar extends React.Component {

  handleClose = () => {
    this.props.onClose && this.props.onClose();
  }

  render() {
    const { classes, open } = this.props;

    return (
      <div>
        <Drawer open={open} onClose={this.handleClose}>
          <div className={classes.list}>
            <Grid container spacing={8} className={classes.profileWrapper}>
              <Grid item>
                <IconButton color='inherit' className={classes.accountButton}>
                  <AccountCircle className={classes.accountIcon}/>
                </IconButton>
              </Grid>
              <Grid item>
              <Typography className={classes.name} color='inherit'>
                Иванов Иван
              </Typography>
              </Grid>
              <Grid item>
                <Typography className={classes.email} color='inherit'>
                  ivanov@gmail.com
                </Typography>
              </Grid>
            </Grid>
            <List>
              <ListItem button>
                <img alt='Templates' src={templates} />
                <ListItemText primary='Шаблоны' />
              </ListItem>
              <ListItem button>
                <img alt='My websites' src={sites} />
                <ListItemText primary='Мои Сайты' />
              </ListItem>
              <ListItem button>
                <img alt='Settings' src={settings} />
                <ListItemText primary='Настройки' />
              </ListItem>
              <ListItem button>
                <img alt='Payments' src={payments} />
                <ListItemText primary='Платежи' />
              </ListItem>   
            </List>
          </div>
        </Drawer>
      </div>
    );
  }
}

export default withStyles(styles)(Sidebar);
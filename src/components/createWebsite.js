import React, { Component } from 'react'
import { withStyles, Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import WebsiteCardsList from './websiteCardsList';
import WebsiteCardsGrid from './websiteCardsGrid';
import AddIcon from '@material-ui/icons/Add';

const styles = theme => ({
  title: {
    fontSize: 34,
    lineHeight: '40px',
    color: theme.palette.text.secondary,
    marginTop: theme.spacing.unit * 8
  },
  addButton: {
    position: 'fixed',
    right: theme.spacing.unit * 2,
    bottom: theme.spacing.unit * 2,
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  desktopCards: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'flex'
    }
  },
  mobileCards: {
    display: 'block',
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  }
})

export class CreateWebsite extends Component {
  render() {
    const { classes, location } = this.props
    return (
      <div>
        <div className={classes.desktopCards}>
          <WebsiteCardsGrid location={location}/> 
        </div>
        <div className={classes.mobileCards}>
          <WebsiteCardsList />
        </div>
        <Button variant="fab" color='primary' className={classes.addButton}>
          <AddIcon />
        </Button>
      </div>
    )
  }
}

CreateWebsite.propTypes = {
  location: PropTypes.string.isRequired
}

export default withStyles(styles)(CreateWebsite);

import React, { Component } from 'react'
import { Grid, Typography, withStyles } from '@material-ui/core';
import CreateWebsiteCard from './createWebsiteCard';
import WebsiteCard from './websiteCardGridItem';
import PropsTypes from 'prop-types';

const styles = theme => ({
  title: {
    fontSize: 34,
    lineHeight: '40px',
    color: theme.palette.text.secondary,
    marginTop: 59,
    marginLeft: theme.shape.cardMargin,
    marginBottom: 37 - theme.shape.cardMargin
  },
  titleWrapper: {
    marginBottom: 37
  },
  websitesWrapper: {
    marginBottom: 92,
    [theme.breakpoints.up('sm')]: {
      width: (theme.shape.cardWidth + theme.shape.cardMargin * 2) * 2
    },
    [theme.breakpoints.up(theme.shape.cardsBreakpointWidth(3))]: {
      width: (theme.shape.cardWidth + theme.shape.cardMargin * 2) * 3
    },
    [theme.breakpoints.up(theme.shape.cardsBreakpointWidth(4))]: {
      width: (theme.shape.cardWidth + theme.shape.cardMargin * 2) * 4
    }
  },
  websitesOuterWrapper: {
    display: 'flex',
    justifyContent: 'center'
  }
});

class WebsiteCardsGrid extends Component {
  render() {
    const { classes, location } = this.props;
    return (
      <Grid container justify='center' wrap='wrap'>
        <Grid item className={classes.websitesOuterWrapper}>
          <Grid container className={classes.websitesWrapper}>
            <Grid item xs={12}>
              <Typography className={classes.title}>
                {location}
              </Typography>
            </Grid>
            <Grid item>
              <CreateWebsiteCard />
            </Grid>
            <Grid item>
              <WebsiteCard />
            </Grid>
            <Grid item>
              <WebsiteCard />
            </Grid>
            <Grid item>
              <WebsiteCard />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

WebsiteCardsGrid.propTypes = {
  location: PropsTypes.string.isRequired
}

export default withStyles(styles)(WebsiteCardsGrid);

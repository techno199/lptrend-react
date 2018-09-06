import React, { Component } from 'react'
import { Grid, Typography, withStyles } from '@material-ui/core';
import CreateWebsiteCard from './createWebsiteCard';
import WebsiteCard from './websiteCard';
import PropsTypes from 'prop-types';

const styles = theme => ({
  title: {
    fontSize: 34,
    lineHeight: '40px',
    color: theme.palette.text.secondary,
    marginTop: theme.spacing.unit * 8
  },
  titleWrapper: {
    marginBottom: 37
  }
});

class WebsiteCardsGrid extends Component {
  render() {
    const { classes, location } = this.props;
    return (
      <div>
        <Grid container justify='center' wrap='wrap'>
          <Grid item xs={11} lg={8} className={classes.titleWrapper}>
            <Typography className={classes.title}>
              {location}
            </Typography>
          </Grid>
          <Grid item xs={11} lg={8}>
            <Grid container spacing={24} className={classes.websitesWrapper}>
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
              <Grid item>
                <WebsiteCard />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    )
  }
}

WebsiteCardsGrid.propTypes = {
  location: PropsTypes.string.isRequired
}

export default withStyles(styles)(WebsiteCardsGrid);

import React, { Component } from 'react';
import { withStyles, ListItem, Typography } from '@material-ui/core';
import cardImg from './../img/cardImg.jpg';

const styles = theme => ({
  websiteImgWrapper: {
    marginLeft: 'auto',
    width: 138,
    height: 72,
    overflow: 'hidden'
  },
  websiteImg: {
    maxWidth: '100%'
  },
  title: {
    fontSize: 20,
    lineHeight: '23px',
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightMedium
  },
  wrapper: {
    display: 'flex',
    flexFlow: 'column nowrap',
  },
  date: {
    fontSize: 12,
    lineHeight: '14px',
    color: theme.palette.text.secondary
  },
  cardListItem: {
    height: 104
  }
});

class WebsiteCardListItem extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <ListItem button className={classes.cardListItem}>
          <div className={classes.wrapper}>
            <Typography gutterBottom className={classes.date}>
              25.02.2018
            </Typography>
            <Typography className={classes.title}>
              Название сайта
          </Typography>
          </div>
          <div className={classes.websiteImgWrapper}>
            <img alt='' src={cardImg} className={classes.websiteImg}/>
          </div>
        </ListItem>
      </div>
    )
  }
}

export default withStyles(styles)(WebsiteCardListItem);

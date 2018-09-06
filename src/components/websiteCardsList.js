import React, { Component } from 'react'
import { List, ListItem, Typography, withStyles } from '@material-ui/core';
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
    flexFlow: 'column nowrap'
  },
  date: {
    fontSize: 12,
    lineHeight: '14px',
    color: theme.palette.text.secondary
  }
});

export class websiteCardsList extends Component {
  render() {
    const { classes } = this.props;
    return (
      <List>
        <ListItem button>
          <div className={classes.wrapper}>
            <Typography gutterBottom className={classes.date}>
              25.02.2008
            </Typography>
            <Typography className={classes.title}>
              Название сайта
          </Typography>
          </div>
          <div className={classes.websiteImgWrapper}>
            <img src={cardImg} className={classes.websiteImg}/>
          </div>
        </ListItem>
        <ListItem button>
          <div className={classes.wrapper}>
            <Typography gutterBottom className={classes.date}>
              25.02.2008
            </Typography>
            <Typography className={classes.title}>
              Название сайта
          </Typography>
          </div>
          <div className={classes.websiteImgWrapper}>
            <img src={cardImg} className={classes.websiteImg}/>
          </div>
        </ListItem>
        <ListItem button>
          <div className={classes.wrapper}>
            <Typography gutterBottom className={classes.date}>
              25.02.2008
            </Typography>
            <Typography className={classes.title}>
              Название сайта
          </Typography>
          </div>
          <div className={classes.websiteImgWrapper}>
            <img src={cardImg} className={classes.websiteImg}/>
          </div>
        </ListItem>
        <ListItem button>
          <div className={classes.wrapper}>
            <Typography gutterBottom className={classes.date}>
              25.02.2008
            </Typography>
            <Typography className={classes.title}>
              Название сайта
          </Typography>
          </div>
          <div className={classes.websiteImgWrapper}>
            <img src={cardImg} className={classes.websiteImg}/>
          </div>
        </ListItem>
      </List>
    )
  }
}

export default withStyles(styles)(websiteCardsList);

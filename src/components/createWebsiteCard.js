import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import createWebsiteIcon from './../icons/createWebsite.svg';

const styles = theme => ({
  card: {
    width: theme.shape.cardWidth,
    margin: theme.shape.cardMargin,
    height: 336,
    cursor: 'pointer'
  },
  media: {
    height: 140,
  },
  mediaRoot: {
    backgroundPosition: 'top'
  }
});

function CreateWebsiteCard(props) {
  const { classes } = props;
  return (
      <img alt='New website' src={createWebsiteIcon} className={classes.card}/>
  );
}

export default withStyles(styles)(CreateWebsiteCard);
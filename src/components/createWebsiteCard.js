import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import cardImg from './../img/cardImg.jpg';
import DeleteIcon from '@material-ui/icons/Delete'
import { IconButton } from '@material-ui/core';
import createWebsiteIcon from './../icons/createWebsite.svg';

const styles = {
  card: {
    width: 240,
    height: 336,
    cursor: 'pointer'
  },
  media: {
    height: 140,
  },
  mediaRoot: {
    backgroundPosition: 'top'
  }
};

function CreateWebsiteCard(props) {
  const { classes } = props;
  return (
      <img src={createWebsiteIcon} className={classes.card}/>
  );
}

export default withStyles(styles)(CreateWebsiteCard);
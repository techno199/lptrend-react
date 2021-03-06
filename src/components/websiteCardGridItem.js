import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import cardImg from './../img/cardImg.jpg';
import DeleteIcon from '@material-ui/icons/Delete'
import { IconButton } from '@material-ui/core';
import editIcon from '../icons/edit.svg';
const styles = theme => ({
  card: {
    width: theme.shape.cardWidth,
    margin: theme.shape.cardMargin,
    height: 336,
    display: 'flex',
    flexFlow: 'column',
    boxShadow: 'none',
    filter: `
      drop-shadow(0 1px 5px rgba(0,0,0,.2))
      drop-shadow(0  3px 4px rgba(0,0,0,.12))
      drop-shadow(0 0 4px rgba(0,0,0,.14))
    `,
    '&:hover': {
      filter: `
        drop-shadow(0px 4px 15px rgba(0,0,0,.2))
        drop-shadow(0px 3px 14px rgba(0,0,0,.12))
        drop-shadow(0px 8px 10px rgba(0,0,0,.14))
      `
    },
    '&:hover $editIcon': {
      display: 'block'
    }
  },
  media: {
    height: 168,
    position: 'relative',
    cursor: 'pointer',
    '&:hover $imageLayer': {
      display: 'block'
    }
  },
  cardContent: {
    flex: '1 1'
  },
  deleteButton: {
    marginLeft: 'auto'
  },
  date: {
    fontSize: 12,
    lineHeight: '14px',
    color: theme.palette.text.secondary
  },
  title: {
    fontSize: 20,
    lineHeight: '23px',
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightMedium
  },
  editIcon: {
    width: theme.shape.editIconSize,
    height: theme.shape.editIconSize,
    position: 'absolute',
    left: `calc(50% - ${theme.shape.editIconSize / 2}px)`,
    top: `calc(50% - ${theme.shape.editIconSize / 2}px)`,
    display: 'none'
  },
  imageLayer: {
    position: 'absolute',
    display: 'none',
    backgroundColor: 'rgba(204, 204, 204, .25)',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    outline: 'none',
    '&:hover': {
      backgroundColor: 'rgba(204, 204, 204, .25)'
    }
  },
  buttonRoot: {
    background: `url(${cardImg})`,
    backgroundSize: 'cover'
  }
});

class WebsiteCard extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.card}>
        <Button className={classes.media} classes={{root: classes.buttonRoot}}>
          <div className={classes.imageLayer} />
          <img alt='edit' src={editIcon} className={classes.editIcon}/>
        </Button>
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom className={classes.date}>
            25.02.2018
          </Typography>
          <Typography gutterBottom className={classes.title}>
            Название сайта
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Опубликовать
          </Button>
          <IconButton size="small" color="primary" className={classes.deleteButton}>
            <DeleteIcon />
          </IconButton>
        </CardActions>
      </Card>
    );
  }
  
}

export default withStyles(styles)(WebsiteCard);
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

const styles = theme => ({
  card: {
    width: 240,
    height: 336,
    display: 'flex',
    flexFlow: 'column'
  },
  media: {
    height: 140,
  },
  mediaRoot: {
    backgroundPosition: 'top'
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
});

class WebsiteCard extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={cardImg}
          title="Contemplative Reptile"
          classes={{root: classes.mediaRoot}}
        />
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
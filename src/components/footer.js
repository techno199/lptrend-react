import React, { Component } from 'react';
import { withStyles, Button } from '@material-ui/core';
import vk from './../icons/vk.svg';
import facebook from './../icons/facebook.svg';
import twitter from './../icons/twitter.svg';
import OK from './../icons/OK.svg';
import gplus from './../icons/gplus.svg';

const styles = theme => ({
  root: {
    height: 264,
    backgroundColor: theme.palette.background.footer,
    display: 'none',
    justifyContent: 'space-between',
    flexFlow: 'column wrap',
    [theme.breakpoints.up('sm')]: {
      display: 'flex'
    }
  },
  buttonsWrapper: {
    paddingTop: 71,
    display: 'flex',
    justifyContent: 'center',
    flexFlow: 'row wrap'
  },
  button: {
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2
  },
  socialWrapper: {
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: 60
  },
  social: {
    marginLeft: 15,
    marginRight: 15,
    cursor: 'pointer'
  }
});

export class Footer extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.buttonsWrapper}>
          <Button className={classes.button}>
            Тарифы
          </Button>
          <Button className={classes.button}>
            Блог
          </Button>
          <Button className={classes.button}>
            Партнерская программа
          </Button>
          <Button className={classes.button}>
            Политика конфиденциальности
          </Button>
          <Button className={classes.button}>
            Поддержка
          </Button>
          <Button className={classes.button}>
            Пользовательское соглашение
          </Button>
        </div>
        <div className={classes.socialWrapper}>
          <img alt='vkontakte' src={vk} className={classes.social}/>
          <img alt='facebook' src={facebook} className={classes.social}/>
          <img alt='odnoklassniki' src={OK} className={classes.social} />
          <img alt='twitter' src={twitter} className={classes.social} />
          <img alt='google plus' src={gplus} className={classes.social} />
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(Footer);
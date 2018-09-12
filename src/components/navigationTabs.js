import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
  tabsWrapper: {
    display: 'none',
    justifyContent: 'center',
    [theme.breakpoints.up('sm')]: {
      display: 'flex'
    }
  },
  tabRoot: {
    fontSize: 13,
    minWidth: 128
  },
});

class NavigationTabs extends React.Component {
  state = {
    value: 1,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.tabsWrapper}>
        <Tabs
          value={this.state.value}
          indicatorColor="primary"
          textColor="primary"
          onChange={this.handleChange}
        >
          <Tab label="Шаблоны" classes={{ root: classes.tabRoot }}/>
          <Tab label="Мои сайты" classes={{ root: classes.tabRoot }}/>
          <Tab label="Настройки" classes={{ root: classes.tabRoot }}/>
          <Tab label="Платежи" classes={{ root: classes.tabRoot }}/>
        </Tabs>
      </Paper>
    );
  }
}

export default withStyles(styles)(NavigationTabs);
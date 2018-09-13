import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from './components/appBar';
import NavigationTabs from './components/navigationTabs';
import Footer from './components/footer';
import CreateWebsite from './components/createWebsite'; 

const styles = {
  root: {
    flexGrow: 1,
    display: 'flex',
    flexFlow: 'column nowrap',
    minHeight: '100vh'
  },
  mainContent: {
    flexGrow: 1
  }
};

class MenuAppBar extends React.Component {
  state = {
    location: 'Мои сайты'
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar location={this.state.location}/>
        <NavigationTabs />
        <div className={classes.mainContent}>
          <CreateWebsite location={this.state.location}/>
        </div>
        <Footer />
      </div>
    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuAppBar);
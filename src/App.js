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
        <CreateWebsite location={this.state.location}/>
        <Footer />
      </div>
    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuAppBar);
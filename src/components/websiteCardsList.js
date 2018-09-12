import React, { Component } from 'react'
import { List } from '@material-ui/core';
import WebsiteCardListItem from './websiteCardListItem';

export class websiteCardsList extends Component {
  render() {
    return (
      <List>
        <WebsiteCardListItem />
        <WebsiteCardListItem />
        <WebsiteCardListItem />
        <WebsiteCardListItem />
      </List>
    )
  }
}

export default websiteCardsList;

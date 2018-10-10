import React, { Component } from 'react';

import Banner from '../../components/Banner';

export default class LandingPage extends Component {
  render() {
    return (
      <div>
        <Banner 
          scrollToProjects={this.props.scrollToProjects}
          scrollToYouTube={this.props.scrollToYouTube}
          scrollToAbout={this.props.scrollToAbout}
          />
      </div>
    )
  }
}

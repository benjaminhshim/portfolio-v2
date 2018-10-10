import React, { Component } from 'react';
import './NavBar.css';
import AppBar from 'react-toolbox/lib/app_bar/AppBar';
import Navigation from 'react-toolbox/lib/navigation/Navigation';
import Link from 'react-toolbox/lib/link/Link';

import github from '../../assets/images/svg/social-1_logo-github.svg';
import linkedin from '../../assets/images/svg/social-1_logo-linkedin.svg';

export default class NavBar extends Component {
  render() {
    return (
      <div id="navbar">
      
        <AppBar >
            <Navigation type='horizontal'>

                <Link onClick={this.props.scrollToProjects}>WEB</Link>
                <Link onClick={this.props.scrollToYouTube}>YOUTUBE</Link>
                <Link onClick={this.props.scrollToAbout}>ABOUT</Link>
                <Link href="https://www.linkedin.com/in/benjaminhshim" target="_blank"><i className="fa fa-linkedin-square social-icon" aria-hidden="true"></i></Link>
                <Link href="https://www.github.com/benjaminhshim" target="_blank"><i className="fa fa-github social-icon" aria-hidden="true"></i></Link>
            </Navigation>
        </AppBar>
      </div>
    )
  }
}

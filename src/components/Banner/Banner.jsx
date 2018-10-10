import React, { Component } from 'react';
import './Banner.css';

import NavBar from '../NavBar';
import NavBar2 from '../NavBar2';

export default class Banner extends Component {
  render() {
    return (
      <div id="banner">
      <NavBar2 
        scrollToProjects={this.props.scrollToProjects}
        scrollToYouTube={this.props.scrollToYouTube}
        scrollToAbout={this.props.scrollToAbout}
        />
        {/* <NavBar /> */}

        <div id="header-div" className="">
            <p id="name">BENJAMIN SHIM</p>
            <p id="role"><span>web developer</span> &nbsp;&nbsp;&nbsp;&nbsp; <span>content creator</span></p>
        </div>
        
        <i class="fa fa-angle-double-down arrow align-middle" aria-hidden="true" onClick={this.props.scrollToProjects}></i>
      </div>
    )
  }
}

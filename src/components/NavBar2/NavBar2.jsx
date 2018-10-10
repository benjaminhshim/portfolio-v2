import React, { Component } from 'react';
import './NavBar2.css';

import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';



export default class NavBar2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
        };
    this.onClick = this.onClick.bind(this);
    }

    onClick(){
        this.setState({
            collapse: !this.state.collapse,
        });
    }
    render() {
        return (
            <Router>
                <Navbar color="" dark expand="md" scrolling>
                    {/* <NavbarBrand href="#">
                        <i className="fa fa-bold social-icon" aria-hidden="true"></i>
                    </NavbarBrand> */}
                    { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                    <Collapse isOpen = { this.state.collapse } navbar>
                        <NavbarNav right>
                          <NavItem>
                              <NavLink to="#" onClick={this.props.scrollToProjects}>WEB</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink to="#" onClick={this.props.scrollToYouTube}>YOUTUBE</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink to="#" onClick={this.props.scrollToAbout}>ABOUT</NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink to="https://www.linkedin.com/in/benjaminhshim" target="_blank">
                                <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                            </NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink to="https://www.github.com/benjaminhshim" target="_blank">
                                <i className="fa fa-github" aria-hidden="true"></i>
                            </NavLink>
                          </NavItem>
                        </NavbarNav>
                       
                    </Collapse>
                </Navbar>
            </Router>
        );
    }
}

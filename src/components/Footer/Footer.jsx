import React, { Component } from 'react';
import './Footer.css';
import { Container, Footer } from 'mdbreact';


export default class AppFooter extends Component {
  render() {
    return (
            <Footer>
                <div className="footer-copyright text-center py-3 pr-5">
                    <Container fluid>
                        &copy; {(new Date().getFullYear())} Benjamin Shim
                    </Container>
                </div>
            </Footer>
    )
  }
}

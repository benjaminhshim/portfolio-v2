import React, { Component } from 'react';
import './YouTube.css';

import Dialog from 'react-toolbox/lib/dialog/Dialog';
import  { Carousel, CarouselInner, CarouselItem, View, Container, Button } from 'mdbreact';

import kindaNeat from '../../assets/images/kindaneat.jpg'
import twitter from '../../assets/images/svg/social-1_logo-twitter.svg';
import youtube from '../../assets/images/svg/social-1_logo-youtube.svg';
import facebook from '../../assets/images/svg/social-1_logo-facebook.svg';

import Fade from 'react-reveal/Fade';

export default class YouTube extends Component {
  state = {
    active: false
  };

  handleToggle = () => {
    this.setState({active: !this.state.active});
  }
  render() {
    return (
      <div id="youtube-div">

        <div id="youtube-card">
        
          <h1>YOUTUBE</h1>
          
          <div id="youtube-container">
            <Fade>
              {/* <img 
                id="kinda-neat-logo" src={kindaNeat} 
                onClick={this.handleToggle}/> */}
                
              <div className="carousel-img">
                <img 
                  id="kinda-neat-logo" src={kindaNeat} 
                  onClick={this.handleToggle}/>
                  <div className="overlay" >
                      <h4 className="overlay-title">Kinda Neat</h4>
                      <h4 className="learn-more" onClick={this.handleToggle}>LEARN MORE</h4>
                  </div>
              </div>
              </Fade>

              <Fade bottom cascade>

              <article>
                    <p>270,000 subscribers</p>
                    <p>70,000,000 views</p>
              </article>

              <div id="kinda-neat-socials">
                  {/* <img className="social-icon" src={twitter} /> */}
                  <a href="https://twitter.com/kindaneat" target="_blank"><i className="fa fa-twitter social-icon" aria-hidden="true"></i></a>
                  <a href="https://youtube.com/kindaneat" target="_blank"><i className="fa fa-youtube social-icon" aria-hidden="true"></i></a>
                  <a href="https://facebook.com/kindaneat" target="_blank"><i className="fa fa-facebook social-icon" aria-hidden="true"></i></a>
              </div>
            </Fade>

          </div>
        </div> 



          <Dialog
          className={`dialog`}
          // actions={this.actions}
          active={this.state.active}
          onEscKeyDown={this.handleToggle}
          onOverlayClick={this.handleToggle}
          title=''
        >
            <Container>
              <Carousel
                style={{boxShadow: "none"}}
                activeItem={1}
                length={3}
                showControls={true}
                showIndicators={false}
                className="z-depth-1">
                <CarouselInner>
                  <CarouselItem itemId="1">
                    <View>
                      <div className="video-parent">
                    <iframe 
                        src="https://www.youtube.com/embed/e9aqYvzqrnI" 
                        frameborder="0" 
                        allow="autoplay; encrypted-media" 
                        allowfullscreen>
                      </iframe>
                      </div>
                    </View>
                  </CarouselItem>
                  <CarouselItem itemId="2">
                    <View>
                      <div className="video-parent">
                    <iframe 
                        src="https://www.youtube.com/embed/kEqmguMjfd8" 
                        frameborder="0" 
                        allow="autoplay; encrypted-media" 
                        allowfullscreen>
                      </iframe>
                      </div>
                    </View>
                  </CarouselItem>
                  <CarouselItem itemId="3">
                    <View>
                      <div className="video-parent">
                    <iframe 
                        src="https://www.youtube.com/embed/oh79L0MCpZY"
                        frameborder="0" 
                        allow="autoplay; encrypted-media" 
                        allowfullscreen>
                      </iframe>
                      </div>
                    </View>
                  </CarouselItem>
                </CarouselInner>
              </Carousel>

              <div className="dialog-content">
                <h2 className="mt-3 mb-2">Kinda Neat</h2>
                <p><em>Co-Founder | Producer</em></p>
                <hr />
                <p>Kinda Neat is a Los Angeles-based content portal for musicians on the verge.</p>
                <div className="dialog-buttons">
                  <Button color="blue-grey" href="https://youtube.com/kindaneat" target="_blank">WATCH</Button>
                  <Button color="elegant" href="https://itunes.apple.com/us/podcast/kinda-neat/id610085475?mt=2" target="_blank">LISTEN</Button>
                  <Button href="http://kindaneat.net" target="_blank">WEBSITE</Button>
                </div>
              </div>
            </Container>
          
            
        </Dialog>
      </div> 
    )
  }
}

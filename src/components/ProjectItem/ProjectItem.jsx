import React, { Component } from 'react';

import './ProjectItem.css';

import Dialog from 'react-toolbox/lib/dialog/Dialog';
import  { Carousel, CarouselInner, CarouselItem, View, Container, Button } from 'mdbreact';



export default class ProjectItem extends Component {
  state = {
    active: false
  };

  handleToggle = () => {
    this.setState({active: !this.state.active});
  }

  test = () => {
    console.log('test');
  }

  actions = [
    { label: "VIEW REPO", onClick: this.handleToggle },
    { label: "VIEW WEBSITE", onClick: this.handleToggle }
  ];

  render() {


    
    return (
      <div id="project-item">

        <div className="carousel-img">
            <img 
              src={require(`../../assets/images/${this.props.src}`)}
              onClick={this.handleToggle}/>
            <div className="overlay" >
                <h4 className="overlay-title">{this.props.title}</h4>
                <h4 className="learn-more" onClick={this.handleToggle}>LEARN MORE</h4>
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

          {!this.props.inProduction ? 
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
                      <img 
                        className=" coverflow-item" 
                        src={require(`../../assets/images/${this.props.item1src}`)} 
                        alt="First slide" />
                    </View>
                  </CarouselItem>
                  <CarouselItem itemId="2">
                    <View>
                      <img 
                        className="  coverflow-item" 
                        src={require(`../../assets/images/${this.props.item2src}`)} 
                        alt="Second slide" />
                    </View>
                  </CarouselItem>
                  <CarouselItem itemId="3">
                    <View>
                      <img 
                        className="  coverflow-item" 
                        src={require(`../../assets/images/${this.props.item3src}`)} 
                        alt="Third slide" />
                    </View>
                  </CarouselItem>
                </CarouselInner>
              </Carousel>

              <div className="dialog-content">
                <h2 className="mt-3">{this.props.title}</h2>
                <p>{this.props.role}</p>
                <hr />
                <p className="mb-2">{this.props.info}</p>
                <div className="dialog-buttons">
                  <Button color="blue-grey" href={this.props.github} target="_blank">VIEW REPO</Button>
                  <Button color="elegant" href={this.props.href} target="_blank">VIEW SITE</Button>
                </div>
              </div>
            </Container>
            :
            <Container>
              <Carousel
                style={{boxShadow: "none"}}
                activeItem={1}
                length={2}
                showControls={true}
                showIndicators={false}
                className="z-depth-1">
                <CarouselInner>
                  <CarouselItem itemId="1">
                    <View>
                      <img 
                        className=" coverflow-item" 
                        src={require(`../../assets/images/${this.props.item1src}`)} 
                        alt="First slide" />
                    </View>
                  </CarouselItem>
                  <CarouselItem itemId="2">
                    <View>
                      <img 
                        className=" coverflow-item" 
                        src={require(`../../assets/images/${this.props.item2src}`)} 
                        alt="First slide" />
                    </View>
                  </CarouselItem>
                </CarouselInner>
              </Carousel>

              <div className="dialog-content">
                <h2 className="mt-3">{this.props.title}</h2>
                <p>{this.props.role}</p>
                <hr />
                <p className="mb-2">{this.props.info}</p>
                <div className="dialog-buttons">
                  <Button color="red" href={this.props.github} target="_blank">IN PRODUCTION</Button>
                </div>
              </div>
            </Container>
            }
            
        </Dialog>
      </div>
    )
  }
}

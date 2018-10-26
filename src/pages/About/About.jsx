import React, { Component } from 'react';
import './About.css';

import Fade from 'react-reveal/Fade';


export default class About extends Component {
  render() {
    return (
      <div id="about-div">

      <div id="about-container">
        <h1>ABOUT</h1>
            {/* <article>
            <p>
                Benjamin Shim is a content creator, digital media producer and musician turned developer. After spending seven years as an audio expert in music, entertainment (including TV, short films &amp; radio) and digital media production (including YouTube &amp; podcasts), he is making a transition to a new career in web development.

                <br />
                <br />

                Why? After working in the entertainment industry creating content, he now looks to create a new type of product leveraging a coding skill set gained from UCLA Extension's Coding Bootcamp. He specializes in the MERN stack with his strengths in JavaScript for both front-end and back-end development.

                <br />
                <br />

                On his free time, he works on his YouTube channel which has accumulated over 260,000 subscribers and 70 million views to date. Check it out <a href="https://youtube.com/kindaneat" target="_blank">here</a>.

                <br />
                <br />
                </p>
        </article> */}

        <div className="container">
          <div className="row">

           
            <div className="col-lg-6 col-md-12 skills">

              <h1>SKILLS</h1>
              <Fade bottom>

                <div className="row">
                  <div className="col">
                      <i class="fa fa-code" aria-hidden="true"></i>
                      <p style={{fontWeight: "700"}}>Front End</p>
                      <p>HTML</p>
                      <p>CSS</p>
                      {/* <p>Sass</p> */}
                      <p>JavaScript</p>
                      <p>React.js</p>
                      <p>jQuery</p>
                  </div>
                  <div className="col">
                      <i class="fa fa-database" aria-hidden="true"></i>
                      <p style={{fontWeight: "700"}}>Back End</p>
                        <p>SQL</p>
                        <p>MongoDB</p>
                        <p>Node.js</p>
                        <p>Express.js</p>
                  </div>
                  <div className="col">
                      <i class="fa fa-mobile" aria-hidden="true"></i>
                      <p style={{fontWeight: "700"}}>Mobile</p>
                      <p>React Native</p>
                  </div>     
                  <div className="col">
                      <i class="fa fa-gear" aria-hidden="true"></i>
                      <p style={{fontWeight: "700"}}>Tools</p>
                      <p>ES6</p>
                      <p>Context API</p>
                      <p>Firebase</p>
                      <p>Sass</p>
                      {/* <p>Squarespace</p> */}
                      <p>Sketch</p>
                  </div>           
                </div>
              </Fade>

            </div>

             <div className="col-lg-6 col-md-12 about-me">
             <h1>BIO</h1>

              <Fade bottom>
                <p>
                  Benjamin Shim is a content creator, digital media producer and musician turned developer. After spending seven years as an audio expert in music, entertainment (including TV, short films &amp; radio) and digital media production (including YouTube &amp; podcasts), he is making a transition to a new career in web development.

                  <br />
                  <br />

                  Why? After working in the entertainment industry creating content, he now looks to create a new type of product leveraging a coding skill set gained from UCLA Extension's Coding Bootcamp. He specializes in the MERN stack with his strengths in JavaScript for both front-end and back-end development.

                  <br />
                  <br />

                  On his free time, he works on his YouTube channel which has accumulated over 270,000 subscribers and 70 million views to date. Check it out <a href="https://youtube.com/kindaneat" target="_blank">here</a>.

                  <br />
                  <br />
                </p>
              </Fade>
            </div>
            
          </div>

          </div>
        </div>
      </div>
    )
  }
}

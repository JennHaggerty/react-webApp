import React, { Component } from 'react';
import './App.css';
import Row from '../node_modules/react-bootstrap/lib/Row';
import Col from '../node_modules/react-bootstrap/lib/Col';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'

export default class About extends Component {
  render() {
    return (
      <div>
        <div id="introduction" className="jumbotron">
        
          <h2>Serving enterprise and startup solutions</h2>
          <p>J Haggerty Consulting LLC provides technical advisement and solutions in four key competencies:</p>
          <Row id="competencies">
            <center>
            <Col id="competencies" className="col-md-3">
              Web Development
            </Col>
            <Col id="competencies" className="col-md-3">
              UX/UI Design
            </Col>
            <Col id="competencies" className="col-md-3">
              Marketing
            </Col>
            <Col id="competencies" className="col-md-3">
              Globalization
            </Col>
            </center>
          </Row>
        
        </div>

        <div id="about">
          <p>J Haggerty Consulting LLC has a unique toolset that can tackle both sides of the technical and creative 
          problems that our clients bring to the table. Our technical and design experience allow us to provide 
          informed, well-reasoned solutions in a timely manner. Mobile and web presence are a requirement in today’s 
          business world, J Haggerty Consulting excels in defining, meeting, and exceeding our client’s critical 
          ePresence needs. We meet these needs by providing customer focused technical solutions, in a transparent, 
          clearly communicated project management environment. Returning clients is a metric we pride ourselves on. 
          Whether you are a small business seeking to distinguish yourself in the global market-place or a governmental 
          agency seeking to better understand the motives and strategies of the actors therein, we can provide the 
          research, analysis and best of all:  a viable, concrete plan for success. Be your questions technical or 
          creative in nature, we have the experience to provide informed, well-reasoned recommendations in a timely 
          manner.</p>
  
          <p>Integrity is the touchstone of J Haggerty Consulting LLC, your success is our success. We will always be honest and 
          up front about project risk-factors, bottle-necks, and contingencies.</p>
          
          <p><b>Principal</b> – J has worked extensively with incubator and start-up companies to refine their vision and to prototype and 
          implement applications for mobile, web, and desktop platforms. With a decade of experience in development and design, 
          and direct management roles. Schooling includes a Bachelor of Arts in Studio Art from the University of South Carolina 
          with a major in Graphic Design and Web Science, with a minors in Sociology. Rare days off are spent painting 
          and studying photography, samples of which can be found <a href="https://bardicwarrior.com">here</a>.</p>
        </div>
      </div>


    )
  }
}
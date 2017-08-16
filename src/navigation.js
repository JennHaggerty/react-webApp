import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import './App.css';
import About from './about';
import Projects from './projects';
import Contact from './contact';
import Posts from './posts';

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //show: false
    };
  }
  render() {
    const self = this;
    const contextualPosts = (props) => {
      return (
        <Posts
          loggedIn={self.props.loggedIn}
          {...props}
       />
      )
    }
    const contextualProjects = (props) => {
      return (
        <Projects
          loggedIn={self.props.loggedIn}
          {...props}
       />
      )
    }
    return (
      <Router>
        <Navbar collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/about" id="NavItem">J HAGGERTY CONSULTING LLC</Link>
            </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse id="navButton">
          <Nav>
            <NavItem><Link to="/about" id="NavItem">About</Link></NavItem>
            <NavItem><Link to="/projects" id="NavItem">Projects</Link></NavItem>
            <NavItem><Link to="/contact" id="NavItem">Contact</Link></NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem><Link to="/posts" id="NavItem">Blog</Link></NavItem>
            <NavItem><Link to="/github" id="NavItem">Github</Link></NavItem>
          </Nav>
        </Navbar.Collapse>
          <Route exact path="/" component={About}/>
          <Route path="/about" component={About}/>
          <Route path="/projects" render={contextualProjects}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/posts" render={contextualPosts}/>
          <Route path='/github' component={() => window.location = 'https://github.com/jennhaggerty'}/>
        </Navbar>
      </Router>
    )
  }
}
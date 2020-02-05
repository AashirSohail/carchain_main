import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBIcon } from "mdbreact";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from "./home";
import About from "./about";
import SignUpUser from "./signup";
import LogInUser from "./signin";
import Workshop from "./workshop";
import Report from "./report";


import log from "./../images/block.png";

class NavbarPage extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    <Router>
      <MDBNavbar color="elegant-color-dark" dark expand="md">
        <MDBNavbarBrand>
          <img src={log} style = {{width : "7rem"}} className="rounded mx-auto d-block mb-2" alt="aligment" />
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav right>
            <MDBNavItem className = "mr-2">
              <MDBNavLink to="home">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem className = "mr-2">
              <MDBNavLink to="about">About</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem className = "mr-2">
              <MDBNavLink to="login">Login</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem className = "mr-2">
            <MDBNavLink to="signup">Signup</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem className = "mr-2">
            <MDBNavLink to="report">Report</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light text-center" to="#!">
              <a href="#!"><MDBIcon fab icon="facebook" className = "white-text" />&ensp;&ensp; </a>
              <a href="#!"><MDBIcon fab icon="instagram" className = "white-text" />&ensp;&ensp; </a>
              <a href="#!"><MDBIcon fab icon="linkedin" className = "white-text" />&ensp;&ensp; </a>
              <a href="#!"><MDBIcon icon="at" className = "white-text" />&ensp;&ensp; </a>
              </MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
      <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/home" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/signup" component={SignUpUser} />
            <Route path="/login" component={LogInUser} />
            <Route path="/workshop" component={Workshop} />
            <Route path="/report" component={Report} />
      </Switch>
    </Router>
    );
  }
}

export default NavbarPage;
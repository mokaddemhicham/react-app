import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Features from './components/Features';
import Services from './components/Services';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import Profile from './components/Profile';

class App extends Component {
  state = {
    name : "Hicham"
  }
  render() {
    return (
      <Router>
        <NavBar />
          <Switch>
            <Route exact path="/">
              <Header />
              <Features />
            </Route>
            <Route path="/services">
              <Services />
            </Route>
            <Route path="/about-us">
              <AboutUs />
            </Route>
            <Route path="/contact-us">
              <ContactUs />
            </Route>
            <Route path="/profile">
              <Profile name={this.state.name} />
            </Route>
          </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
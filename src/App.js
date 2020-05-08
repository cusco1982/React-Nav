import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Discover from "./pages/Discover";
import About from "./pages/About";
import Search from "./pages/Search";
// import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';


class App extends Component {


  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };


  render() {

    let backdrop;


    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }

    return (

      <Router>
        <div style={{marginTop: '64px'}}>

          <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer show={this.state.sideDrawerOpen} />
          {backdrop}

          {/* <Navbar /> */}
          <Wrapper>
            <Route exact path="/" component={About} />
            <Route exact path="/about" component={About} />
            <Route exact path="/discover" component={Discover} />
            <Route exact path="/search" component={Search} />
          </Wrapper>
          <Footer />
        </div>
      </Router>

    );
  }
}

export default App;
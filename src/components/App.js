import React, { Component } from 'react'
import { CSSTransitionGroup } from 'react-transition-group'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// import components
import HeroSection from './HeroSection'
import ActivitiesPage from './ActivitiesPage'
import FaqPage from './FaqPage'
import ContactPage from './ContactPage'
import MembersPage from './MembersPage'
import JoinPage from './JoinPage'
import Navbar from './Navbar'
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Navbar/>
        <div>
            <Route exact path="/" component={HeroSection} />
            <Route exact path="/activities" component={ActivitiesPage} />
            <Route exact path="/faq" component={FaqPage} />
            <Route exact path="/contact" component={ContactPage} />
            <Route exact path="/members" component={MembersPage} />
            <Route exact path="/join" component={JoinPage} />
		</div>
        <Footer/>
      </div>
      </Router>
    );
  }
}

// styles

const styles = {}

styles.fill = {
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0
}

styles.content = {
  ...styles.fill,
  top: '40px',
  textAlign: 'center'
}

styles.nav = {
  padding: 0,
  margin: 0,
  position: 'absolute',
  top: 0,
  height: '40px',
  width: '100%',
  display: 'flex'
}

styles.navItem = {
  textAlign: 'center',
  flex: 1,
  listStyleType: 'none',
  padding: '10px'
}

styles.hsl  = {
  ...styles.fill,
  color: 'white',
  paddingTop: '20px',
  fontSize: '30px'
}


// end styles

export default App;

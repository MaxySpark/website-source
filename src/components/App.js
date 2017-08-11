import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// import components
import HeroSection from './HeroSection'
import ActivitiesPage from './Activity/ActivitiesPage'
import FaqPage from './FaqPage'
import ContactPage from './Contact/ContactPage'
import MembersPage from './Members/MembersPage'
import JoinPage from './Join/JoinPage'
import ProjectsPage from './Projects/ProjectsPage'
import Navbar from './Navbar'
import Footer from './Footer'

class CustomRoute extends Component {
  render() {
    return (
      <Route exact path={this.props.path} component={this.props.component} />
    )
  }
}

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
            <Route exact path="/projects" component={ProjectsPage} />
		</div>
        <Footer/>
      </div>
      </Router>
    );
  }
}

export default App;

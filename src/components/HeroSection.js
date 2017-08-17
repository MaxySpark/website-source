import React from 'react'
import axios from 'axios'
import { lifecycle, compose, withState } from 'recompose'
import { Link } from 'react-router-dom'
import HeroSectionActivity from './HeroSectionActivity'
import mozillaLogo from '../mozilla-firefox.svg'

const HeroSection = props => (
        <section className="section hero-section">
          <div className="container">
            <div className="columns">
              <div className="column">
                 <h1 className="title">Coding Club GIMT</h1>
                 <h2 className="subtitle">A Mozilla Club, Guwahati</h2>
                 <Link to="/join"><button className="">Join the club</button></Link>
                 {
                   props.nextActivities.map(nextActivity =>
                     <HeroSectionActivity nextActivity={nextActivity} key={nextActivity.serialnumber}/>
                   )
                 }
              </div>
              <div className="column animation-div">
                 <img alt="Mozilla Logo" src={mozillaLogo}/>
              </div>
            </div>
          </div>
        </section>
)

const HeroSectionWithLife = compose(
  withState('nextActivities', 'setNextActivities', []),
  lifecycle({
    componentDidMount(){
      const toggleButton = document.querySelector('.burger');
      const menu = document.querySelector('.navbar-menu');
      menu.classList.remove('is-active');
      toggleButton.classList.remove('is-active');
      // get next activities
      axios.get('https://mighty-tor-86880.herokuapp.com/nextevent/13AWPX68OBmPmf0KZhkZxtUdtFdmvuP312XG8utNnoZE')
             .then((res)=>{
                this.props.setNextActivities(res.data);
             })
    }
  })
)(HeroSection);

export default HeroSectionWithLife;

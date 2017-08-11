import React from 'react'
import { lifecycle, compose } from 'recompose'
import { Link } from 'react-router-dom'
import HeroSectionActivity from './HeroSectionActivity'
import mozillaLogo from '../mozilla-firefox.svg'

const HeroSection = props => (
        <section className="section hero-section">
          <div className="container">
            <div className="columns">
              <div className="column">
                 <h1 className="title">GIMT Coding Club</h1>
                 <h2 className="subtitle">A Mozilla Club, Guwahati</h2>
                 <Link to="/join"><button className="">Join the club</button></Link>
                 <HeroSectionActivity/>
              </div>
              <div className="column animation-div">
                 <img alt="Mozilla Logo" src={mozillaLogo}/>
              </div>
            </div>
          </div>
        </section>
)

const HeroSectionWithLife = compose(
  lifecycle({
    componentDidMount(){
      const toggleButton = document.querySelector('.burger');
      const menu = document.querySelector('.navbar-menu');
      menu.classList.remove('is-active');
      toggleButton.classList.remove('is-active');
    }
  })
)(HeroSection);

export default HeroSectionWithLife;

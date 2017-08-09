import React from 'react'
import { Link } from 'react-router-dom'

const HeroSection = props => (
        <section className="section hero-section">
          <div className="container">
            <div className="columns">
              <div className="column">
                      <h1 className="title">GIMT Coding Club</h1>
                      <h2 className="subtitle">A Mozilla Club, Guwahati</h2>
                      <Link to="/join"><button className="">Join the club</button></Link>
                      <div className="homepage-activity">
                        <h6 className="title">Next Activity</h6>
                        <h4 className="">Developing Firefox WebExtensions</h4>
                        <h5 className="">JavaScript, HTML, CSS (30mins)</h5>
                        <h5 className="">14:00, 13th August</h5>
                        <h5 className="">2nd floor, CSE Lab</h5>
                      </div>
              </div>
              <div className="column">
                      animation
              </div>
            </div>
          </div>
        </section>
)

export default HeroSection;

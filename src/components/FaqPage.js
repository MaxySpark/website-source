import React from 'react'
import { lifecycle, compose } from 'recompose'

const FaqPage = props => (
        <section className="section">
          <div className="container">
            <h2 className="title">FAQ</h2>
            <h4 className="title is-4">Can I join?</h4>
            <p>yes.</p>
          </div>
        </section>
)

const FaqPageWithLife = compose(
  lifecycle({
    componentDidMount(){
      const toggleButton = document.querySelector('.burger');
      const menu = document.querySelector('.navbar-menu');
      menu.classList.remove('is-active');
      toggleButton.classList.remove('is-active');
    }
  })
)(FaqPage);

export default FaqPageWithLife;

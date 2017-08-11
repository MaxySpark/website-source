import React from 'react'
import { lifecycle, compose } from 'recompose'

const ContactPage = props => (
        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column">
                <h1 className="title">Contact</h1>
                <p>codingclubgimt@gmail.com</p>
              </div>
            </div>
          </div>
        </section>
)

const ContactPageWithLife = compose(
  lifecycle({
    componentDidMount(){
      const toggleButton = document.querySelector('.burger');
      const menu = document.querySelector('.navbar-menu');
      menu.classList.remove('is-active');
      toggleButton.classList.remove('is-active');
    }
  })
)(ContactPage);

export default ContactPageWithLife;

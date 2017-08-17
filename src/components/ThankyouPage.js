import React from 'react'
import { lifecycle, compose } from 'recompose'

const ThankyouPage = props => (
        <section className="section">
          <div className="container">
            <h2 className="title">Thankyou!</h2>
          </div>
        </section>
)

const ThankyouPageWithFile = compose(
  lifecycle({
    componentDidMount(){
      const toggleButton = document.querySelector('.burger');
      const menu = document.querySelector('.navbar-menu');
      menu.classList.remove('is-active');
      toggleButton.classList.remove('is-active');
    }
  })
)(ThankyouPage);

export default ThankyouPageWithFile;

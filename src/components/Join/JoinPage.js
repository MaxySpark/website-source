import React from 'react'
import { lifecycle, compose } from 'recompose'
import Form from './Form'
import smashpaws from '../../smashpaws.gif'

const JoinPage = props => (
        <section className="section form-container">
          <div className="container">
            <h4 className="title is-4">GIMT Coding Club Membership Form</h4>
            <div className="columns">
              <div className="column is-6 box">
                <Form/>
              </div>
              <div className="column flex-center">
                      <img alt="cat smash paws" src={smashpaws}/>
              </div>
            </div>
          </div>
        </section>
)

const JoinPageWithLife = compose(
  lifecycle({
    componentDidMount(){
      const toggleButton = document.querySelector('.burger');
      const menu = document.querySelector('.navbar-menu');
      menu.classList.remove('is-active');
      toggleButton.classList.remove('is-active');
    }
  })
)(JoinPage);

export default JoinPageWithLife;

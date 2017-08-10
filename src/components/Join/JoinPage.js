import React from 'react'
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

export default JoinPage;

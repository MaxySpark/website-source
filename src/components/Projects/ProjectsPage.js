import React from 'react'
import { lifecycle, compose } from 'recompose'

const ProjectsPage = props => (
        <section className="section">
          <div className="container">
            <h1 className="title">Projects by members</h1>
            <p className="">Currently no projects</p>
          </div>
        </section>
)

const ProjectsPageWithLife = compose(
  lifecycle({
    componentDidMount(){
      const toggleButton = document.querySelector('.burger');
      const menu = document.querySelector('.navbar-menu');
      menu.classList.remove('is-active');
      toggleButton.classList.remove('is-active');
    }
  })
)(ProjectsPage);

export default ProjectsPageWithLife;

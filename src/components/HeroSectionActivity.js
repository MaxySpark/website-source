import React from 'react'

const HeroSectionActivity = props => (
  <div className="box">
  <article className="media">
    <div className="media-content">
      <div className="content">
        <p><small>Next Activity</small></p>
        <p> <strong>{props.nextActivity.name}</strong> </p>
        <p>
        <small> {props.nextActivity.time}, {props.nextActivity.date} • {props.nextActivity.location}</small>
        </p>
        <p> <small>{props.nextActivity.description}</small> </p>
      </div>
    </div>
  </article>
</div>
)

export default HeroSectionActivity ;

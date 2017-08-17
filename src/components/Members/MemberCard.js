import React from 'react'

const MemberCard = props => (
<div className="card">
  <div className="card-content">
    <div className="media">
      <div className="media-content">
        <p className="title is-6">{props.name}</p>
      </div>
    </div>

    <div className="content">
      <small>{props.bio}</small>
    </div>
  </div>
</div>
)

export default MemberCard;

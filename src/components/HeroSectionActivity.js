import React from 'react'
import axios from 'axios'
import { lifecycle, compose, withState } from 'recompose'

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

const HeroSectionActivityWithLife = compose(
  withState('nextActivity', 'setActivity', {}),
  lifecycle({
    componentDidMount(){
        axios.get('https://mighty-tor-86880.herokuapp.com/sheet/13AWPX68OBmPmf0KZhkZxtUdtFdmvuP312XG8utNnoZE')
             .then((res)=>{
                this.props.setActivity(res.data[0]);
             })
    }
  })
)(HeroSectionActivity);

export default HeroSectionActivityWithLife ;

/*
  <div className="homepage-activity">
    <h6 className="title">Next Activity</h6>
    <h4 className="">Developing Firefox WebExtensions</h4>
    <h5 className="">JavaScript, HTML, CSS (30mins)</h5>
    <h5 className="">14:00, 13th August</h5>
    <h5 className="">2nd floor, CSE Lab</h5>
  </div>
*/

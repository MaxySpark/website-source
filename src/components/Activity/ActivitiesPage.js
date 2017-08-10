import React from 'react'
import axios from 'axios'
import { lifecycle, compose, withState } from 'recompose'
import TimelineItem from './TimelineItem'


const ActivitiesPage = props => (
        <section className="section form-container">
          <div className="container">
            <h2 className="title">Activities</h2>
            <div className="columns">
              <div className="column is-6 box">
                <div className="timeline-container">
                <div className="timeline">
                    {props.activities.length > 0
                     ?props.activities.map(activity => {
                      return <TimelineItem
                      key={activity.serialnumber}
                      name={activity.name}
                      date={activity.date}
                      />
                     })
                     :<p>Fetching Activities...</p>
                    }
                </div>
                </div>
              </div>
            </div>
          </div>
        </section>
)

const ActivitiesPageWithLife = compose(
  withState('activities', 'setActivities', []),
  lifecycle({
    componentDidMount(){
        axios.get('https://mighty-tor-86880.herokuapp.com/sheet/13AWPX68OBmPmf0KZhkZxtUdtFdmvuP312XG8utNnoZE')
             .then((res)=>{
                this.props.setActivities(res.data);
             })
    }
  })
)(ActivitiesPage);


export default ActivitiesPageWithLife;

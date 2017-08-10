import React from 'react'
import TimelineItem from './TimelineItem'

const ActivitiesPage = props => (
        <section className="section">
          <div className="container">
            <h2 className="title">Activities</h2>
            <div className="timeline">
                <TimelineItem type="is-danger"/>
                <TimelineItem type="is-warning"/>
                <TimelineItem/>
                <TimelineItem/>
            </div>
          </div>
        </section>
)

export default ActivitiesPage;


/*

            <table className="table">
              <thead>
                <tr>
                  <th>Sl No.</th>
                  <th>Name</th>
                  <th>Date</th>
                  <th>Members</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>+32</td>
                  <td>Tajjh jkashdjha asjhdjashd asjdh</td>
                  <td>Tajjh</td>
                  <td>Tajjh</td>
                </tr>
                <tr>
                  <td>+32</td>
                  <td>Tajjh</td>
                  <td>Tajjh</td>
                  <td>Tajjh</td>
                </tr>
              </tbody>
            </table>

*/

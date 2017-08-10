
import React from 'react'

const TimelineItem = props => (
        <div className={`timeline-item ${props.type || 'is-primary'}`} id="timeline-example-1">
          <div className="timeline-left is-icon-large">
            <a href="#timeline-example-1" className="timeline-icon"></a>
          </div>
          <div className="timeline-content">
            <div className="level">
              <div className="level-left">
                <div className="level-item">
                  <div>
                    <p className="heading">{props.date}</p>
                    <p>{props.name}</p>
                  </div>
                </div>
                <div className="level-right">
                </div>
              </div>
            </div>
          </div>
        </div>
)

export default TimelineItem;

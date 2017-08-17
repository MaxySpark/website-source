
import React from 'react'

const TimelineItem = props => {
        let type = props.next?'is-warning':null; // change class to is-warning if next event

        return (
        <div className={`timeline-item ${type || 'is-primary'}`} id="timeline-example-1">
          <div className="timeline-left is-icon-large">
            <a href="#timeline-example-1" className="timeline-icon">.</a>
            {/* linter gives warning if anything is not given inside 'a' tag*/}
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
}

export default TimelineItem;

import React from 'react'
import MemberCard from './MemberCard'

const MembersPage = props => (
        <section className="section">
          <div className="container">
            <h1 className="title">Members (20)</h1>
            <div className="columns is-multiline">
              <div className="column is-3"> <MemberCard/> </div>
              <div className="column is-3"> <MemberCard/> </div>
              <div className="column is-3"> <MemberCard/> </div>
              <div className="column is-3"> <MemberCard/> </div>
              <div className="column is-3"> <MemberCard/> </div>
              <div className="column is-3"> <MemberCard/> </div>
            </div>
          </div>
        </section>
)

export default MembersPage;

import React from 'react'
import axios from 'axios'
import { lifecycle, compose, withState } from 'recompose'
import MemberCard from './MemberCard'

const MembersPage = props => (
        <section className="section">
          <div className="container">
            <h1 className="title">Members ({props.members.length})</h1>
            <div className="columns is-multiline">
              {props.members && props.members.map( member =>
                      <div key={member.roll} className="column is-3">
                      <MemberCard name={member.name} bio={member.interests}/>
                      </div>
              )}
            </div>
          </div>
        </section>
)

const MembersPageWithLife = compose(
  withState('members', 'setMembers', []),
  lifecycle({
    componentDidMount(){
      const toggleButton = document.querySelector('.burger');
      const menu = document.querySelector('.navbar-menu');
      menu.classList.remove('is-active');
      toggleButton.classList.remove('is-active');
      axios.get('https://mighty-tor-86880.herokuapp.com/sheet/1p63gRkgZlGfwEQEnXChiJKCz6Fzpodcrv9Yv3Qd5Ppg')
           .then((res)=>{
              this.props.setMembers(res.data);
           })
    }
  })
)(MembersPage);

export default MembersPageWithLife;

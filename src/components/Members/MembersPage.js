import React from 'react'
import axios from 'axios'
import { lifecycle, compose, withState } from 'recompose'
import MemberCard from './MemberCard'

const MembersPage = props => (
        <section className="section">
          <div className="container">
            <h1 className="title">Members (20)</h1>
            <div className="columns is-multiline">
                {props.members && props.members.map(member => <MemberCard/>)}
            </div>
          </div>
        </section>
)

const MembersPageWithLife = compose(
  withState('members', 'setMembers', []),
  lifecycle({
    componentDidMount(){
        axios.get('https://mighty-tor-86880.herokuapp.com/sheet/1p63gRkgZlGfwEQEnXChiJKCz6Fzpodcrv9Yv3Qd5Ppg')
             .then((res)=>{
                this.props.setMembers(res.data);
             })
    }
  })
)(MembersPage);

export default MembersPageWithLife;

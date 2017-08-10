import React from 'react'

const JoinPage = props => (
        <section className="section">
          <div className="container">
            <h4 className="title is-4">GIMT Coding Club Membership Form</h4>
            <div className="columns">
              <div className="column is-6 box">
            <form>
              <div className="field">
                <label name="name" className="label">Name</label>
                <div className="control">
                   <input name="name" className="input" type="text" placeholder="e.g Chill boi"/>
                </div>
              </div>
              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                   <input name="email" className="input" type="email" placeholder="e.g chill@chill.com"/>
                </div>
              </div>
              <div className="field">
                <label className="label">Phone</label>
                <div className="control">
                   <input name="phone" className="input" type="phone" placeholder="e.g 864446656"/>
                </div>
              </div>
              <div className="field has-addons">
                <div className="control">
                  <div className="select">
                    <select>
                      <option>Semester</option>
                      <option>1st Semester</option>
                      <option>3rd Semester</option>
                      <option>5th Semester</option>
                      <option>7th Semester</option>
                    </select>
                  </div>
                </div>
                <div className="control">
                  <div className="select">
                    <select>
                      <option>Branch</option>
                      <option>CSE</option>
                      <option>ECE</option>
                      <option>Mechanical</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="field">
                 <label className="label">What do you expect from the club?</label>
                 <div className="control">
                   <textarea className="textarea" placeholder="Textarea"></textarea>
                 </div>
              </div>
              <div className="field">
                 <label className="label">Technical Interests?</label>
                 <div className="control">
                   <textarea className="textarea" placeholder="Textarea"></textarea>
                 </div>
              </div>
              <div className="field">
                <div className="control">
                  <button className="button is-primary">Submit</button>
                </div>
              </div>
            </form>
              </div>
            </div>
          </div>
        </section>
)

export default JoinPage;
